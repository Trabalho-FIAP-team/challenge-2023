import {auth, clerkClient} from "@clerk/nextjs";
import {NextRequest, NextResponse} from "next/server";
import { Resend } from 'resend';
import {PrismaClient} from "@prisma/client";
import EmailTemplate from "@/app/(root)/(routes)/events/[eventTitle]/[eventId]/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest, { params }: { params: { eventId: string }}) {
    try {

        const authUser = auth();
        const userId = authUser.sessionClaims?.sub

        if (!userId) return NextResponse.error();

        if (!params.eventId) return NextResponse.error();

        const user = await prisma.user.findUnique({
            where: {
                externalId: userId,
            },
        })

        if (!user) return NextResponse.error();

        const events = user?.likesIDs.filter(like => like !== params.eventId)

        await prisma.user.update({
            where: {
                id: user?.id,
            },
            data: {
                likesIDs: events,
            }
        })

        // TODO: remover eventos passados
        return NextResponse.json({});

    } catch (error) {
        return NextResponse.json({ error });
    }
}

export async function POST(request: NextRequest, { params }: { params: { eventId: string }}) {
    try {

        const authUser = auth();
        const userId = authUser.sessionClaims?.sub
        
        if (!userId || !params.eventId) return NextResponse.error();

        const event = await prisma.event.findUnique({
            where: {
                id: params.eventId
            }
        })

        if (!event) return NextResponse.error();

        const user = await prisma.user.findUnique({
            where: {
                externalId: userId
            }
        })

        if (!user) return NextResponse.error();

        event.usersIDs?.push(user.id);

        prisma.event.update({
            where: {
                id: event.id,
            },
            data: {
                usersIDs: event.usersIDs,
            }
        });

        const clerkUser = await clerkClient.users.getUser(userId);
        const email = clerkUser.emailAddresses[0].emailAddress

        if (!email) return NextResponse.error();

        const data = await resend.emails.send({
            from: 'EcoConnect <contact@ecoconnect.online>',
            to: [email],
            subject: "EcoConnect Event",
            react: EmailTemplate({
                userName: "Rafa",
                fromEmail: email,
                eventAuthor: event.author,
                eventData: event.data,
                eventTitle: event.title,
                thumb: event.thumb
            }) as React.ReactElement,
        });
        console.log(data)
        return NextResponse.json(data);

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error });
    }
}
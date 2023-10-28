import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {auth} from "@clerk/nextjs";

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    try {
        const authUser = auth();
        const userId = authUser.sessionClaims?.sub

        const eventId = request.nextUrl.searchParams.get('eventId');

        if (!userId || !eventId) return NextResponse.error();

        const event = await prisma.event.findUnique({
            where: {
                id: eventId
            }
        })

        if (!event) return NextResponse.error();

        return NextResponse.json({ count: event.likesIDs.length })
    } catch (error) {
        return NextResponse.error();
    }
}

export async function POST(request: NextRequest) {
    try {
        const authUser = auth();
        const userId = authUser.sessionClaims?.sub

        const eventId = request.nextUrl.searchParams.get('eventId');

        if (!userId || !eventId) return NextResponse.error();

        const event = await prisma.event.findUnique({
            where: {
                id: eventId
            }
        })

        if (!event) return NextResponse.error();

        const user = await prisma.user.findUnique({
            where: {
                externalId: userId,
            }
        })

        if (!user) return NextResponse.error();
        
        event.likesIDs?.push(user.id);

        prisma.event.update({
            where: {
                id: event.id
            },
            data: event
        });

        return NextResponse.json({});
    } catch (error) {
        return NextResponse.error();
    }
}
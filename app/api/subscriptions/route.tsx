import {NextResponse} from 'next/server';
import { auth, clerkClient } from '@clerk/nextjs';
import {PrismaClient} from "@prisma/client";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const prisma = new PrismaClient();

export async function GET() {
    try {

        const authUser = auth();
        const userId = authUser.sessionClaims?.sub

        if (!userId) return NextResponse.error();

        const user = await prisma.user.findUnique({
            where: {
                externalId: userId,
            }
        })

        // TODO: remover eventos passados
        return NextResponse.json(user.events);

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error });
    }
}


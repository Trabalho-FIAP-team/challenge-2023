import {NextResponse} from 'next/server';
import { auth, clerkClient } from '@clerk/nextjs';
import {PrismaClient} from "@prisma/client";
import { Resend } from 'resend';
import { prisma } from '@/lib/db';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const authUser = auth();
        const userId = authUser.sessionClaims?.sub

        if (!userId) return NextResponse.error();

        const user = await prisma.user.findUnique({
            where: {
                externalId: userId,
            },
            include: {
                events: true
            }
        })
        if(user) {
            return NextResponse.json(user.events);
        } 
        return NextResponse.json([])
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error });
    }
}


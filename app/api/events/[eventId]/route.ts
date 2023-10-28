import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {auth} from "@clerk/nextjs";

const prisma = new PrismaClient()

export async function GET(request: NextRequest, { params }: { params: { eventId: string }}) {

    try {
        const authUser = auth();
        const userId = authUser.sessionClaims?.sub;

        if (!userId || !params.eventId) return NextResponse.error();

        const event = await prisma.event.findUnique({
            where: {
                id: params.eventId
            }
        })

        if (!event) return NextResponse.error();

        return NextResponse.json(event)
    } catch (error) {
        return NextResponse.error();
    }
}
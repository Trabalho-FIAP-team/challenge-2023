import {NextResponse} from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { eventId: string } }
) {
    try {
        const event = await prisma.event.findUnique({
          where: {
            id: params.eventId
          }
        });

        if (!event) {
          return new NextResponse('_ERROR_GET_EVENTID', { status: 400})
        }
        return NextResponse.json(event);
    } catch (error) {
        return NextResponse.error();
    }
}
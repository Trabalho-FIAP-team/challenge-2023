import {NextResponse} from "next/server";
import {events} from "@/data";

export async function GET() {
    try {
        return NextResponse.json(events);
    } catch (error) {
        return NextResponse.error();
    }
}
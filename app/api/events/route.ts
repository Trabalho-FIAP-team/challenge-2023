import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

import { prisma } from '@/lib/db';
 
export async function POST(
  req: Request,
) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { title, thumb, image, author, data, text } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!title) {
      return new NextResponse("Title is required", { status: 400 });
    }

    if (!thumb) {
      return new NextResponse("Thumb is required", { status: 400 });
    }

    if (!image) {
      return new NextResponse("Image is required", { status: 400 });
    }

    if (!author) {
      return new NextResponse("Author is required", { status: 400 });
    }

    if (!data) {
      return new NextResponse("Image is required", { status: 400 });
    }

    if (!text) {
      return new NextResponse("Author is required", { status: 400 });
    }

    const adminUser = await prisma.user.findFirst({
      where: {
        id: userId,
      }
    });

    if (!adminUser) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const event = await prisma.event.create({
      data: {
        title,
        thumb,
        image,
        author,
        data,
        text
      }
    });
  
    return NextResponse.json(event);
  } catch (error) {
    console.log('[EVENTS_POST]', error);
    return new NextResponse("Internal error [POST]", { status: 500 });
  }
};
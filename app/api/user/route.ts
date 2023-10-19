import { clerkClient } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET(req: Request, res: Response) {
  try {
    const users = await clerkClient.users.getUserList();
    console.log(users.map((user) => user.emailAddresses.map((email) => email.emailAddress)))
    return NextResponse.json(users, { status: 200 })
  } catch (error) {
    return new NextResponse('Deu ruim', { status: 400 })
  }
}
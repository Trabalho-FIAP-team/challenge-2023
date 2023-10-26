import EmailTemplate  from '@/app/(root)/(routes)/events/[eventTitle]/[eventId]/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';
import { auth, clerkClient } from '@clerk/nextjs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {

    const authUser = auth();
    const userId = authUser.sessionClaims?.sub

    if (userId) {
      const user = await clerkClient.users.getUser(userId);
      const email = user.emailAddresses[0].emailAddress
      const data = await resend.emails.send({
        from: 'EcoConnect <contact@ecoconnect.online>',
        to: [email],
        subject: "EcoConnect Event",
        react: EmailTemplate({ 
          userName: "Rafa", 
          fromEmail: email, 
          eventAuthor: 'Friedrich Nietzsche',
          eventData: '25-12-2023',
          eventTitle: 'Seminário de Tecnologia',
          thumb: 'https://picsum.photos/id/200/800/400'
        }) as React.ReactElement,
      });
      return NextResponse.json(data);
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error });
  }
}

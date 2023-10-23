import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';
import { auth, clerkClient } from '@clerk/nextjs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    
    const authUser = auth();
    const userId = authUser.sessionClaims?.sub

    console.log(userId)
    if (userId) {
      const user = await clerkClient.users.getUser(userId);
      const email = user.emailAddresses[0].emailAddress
      console.log(email)
      const data = await resend.emails.send({
        from: 'EcoConnect <contact@ecoconnect.online>',
        to: [email],
        subject: "EcoConnect Event",
        react: EmailTemplate({ firstName: "Eco" }) as React.ReactElement,
      });
      console.log(data)
      return NextResponse.json(data);
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error });
  }
}

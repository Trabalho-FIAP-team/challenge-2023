import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Resend } from 'Resend';

interface EventEmailProps {
  eventTitle: string;
  eventImage: string;
}

export default function SendEventEmailButton({
  eventTitle,
  eventImage
}: EventEmailProps) {
  const user = useUser();
  const userEmail = user?.user?.primaryEmailAddress?.emailAddress;
  const resend = new Resend('re_4GAhU9d4_6qHfxUKionP9pW3JwuDkLq9g');

  const sendEmail = async () => {
    if (userEmail) {
      const emailData = {
        from: 'onboarding@resend.dev',
        to: userEmail,
        subject: eventTitle,
        html: '<p>teste teste teste<p>'
      };

      const requestOptions: RequestInit = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      };

      try {
        const response = await fetch('URL_DA_SUA_API', requestOptions);

        if (!response.ok) {
          console.error('https://api.resend.com', response.statusText);
          return;
        }
        resend.emails.send(emailData);
      } catch (error) {
        console.error('Erro na solicitação:', error);
      }
    } else {
      console.error('User email not available');
    }
  };

  return (
    <Button onClick={sendEmail}>Send Email</Button>
  );
}

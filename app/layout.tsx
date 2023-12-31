import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'
import {Next13ProgressBar} from "next13-progressbar";
import {RoutingProgress} from "@/components/ui/routing-progress";


const font = Poppins({ 
  subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', ]
})

export const metadata: Metadata = {
  title: 'EcoConnect',
  description: 'Schneider Eletric',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} afterSignInUrl='/' afterSignUpUrl='/'>
      <html lang="en">
        <body className={font.className}>
          <RoutingProgress height="3px" color="#64a30d" options={{ showSpinner: false }} showOnShallow />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Toaster />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

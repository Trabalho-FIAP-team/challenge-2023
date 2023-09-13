
import { Navbar } from "@/components/navbar";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import {Footer} from "@/components/footer";

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}) => {

  const { userId } = auth();
  if(!userId) redirect('/sign-in')

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-center pt-8 border-b">
        <Navbar />
      </div>
      <main className="flex-grow">
        {children}
      </main>
      <div className="flex justify-center mt-12 border-t">
          <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
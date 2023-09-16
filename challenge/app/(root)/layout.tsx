
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
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-center pt-8 border-b">
        <Navbar className="w-10/12 px-4"/>
      </div>
      <main className="mx-auto w-9/12 flex-grow">
        {children}
      </main>

      <Footer className="w-10/12 mx-auto px-4 mt-12  border-t" />
    </div>
  );
}

export default RootLayout;

import { Navbar } from "@/components/navbar";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}) => {

  const { userId } = auth();
  if(!userId) redirect('/sign-in')

  return (
    <div className="h-full">
      <div className="flex justify-center pt-8 border-b">
        <Navbar />
      </div>
      <main className="h-full">
        {children}
      </main>
    </div>
  );
}
 
export default RootLayout;
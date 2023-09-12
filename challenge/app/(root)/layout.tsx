
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
      <Navbar />
      <main className="md:pl-20 pt-16 h-full">
        {children}
      </main>
    </div>
  );
}
 
export default RootLayout;
import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
  <div className="h-full lg:mr-[50%]">
    <div className="lg:mt-40">
      <SignUp />
    </div>
  </div>
  )
}
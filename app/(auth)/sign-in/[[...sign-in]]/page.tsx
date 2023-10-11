import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
  <div className="h-full bg-[url('/images/auth.svg')] bg-cover">
    <div>
    <SignIn />
    </div>
  </div>
  )
}
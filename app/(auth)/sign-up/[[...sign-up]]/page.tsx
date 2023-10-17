import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
  <div className="h-full lg:mr-[50%]">
    <div className="lg:mt-36">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-5xl text-center ">Titulo</h1>
      <SignUp />
    </div>
  </div>
  )
}
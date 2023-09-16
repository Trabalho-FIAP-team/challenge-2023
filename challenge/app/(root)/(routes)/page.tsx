import Hero from "@/components/hero";
import Pros from "@/components/pros";
import LearnWithUs from "@/components/learn-with-us";

export default function RootPage() {
  return (
    <main className="w-center">
      <Hero className="mt-20" />

      <Pros className="mt-20" />

      <LearnWithUs className="mt-20" />
    </main>
  )
}
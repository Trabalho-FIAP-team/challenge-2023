import Hero from "@/components/hero";
import Pros from "@/components/pros";
import LearnWithUs from "@/components/learn-with-us";
import Testimonials from "@/components/testimonials";

export default function RootPage() {
  return (
    <main className="w-center">
      <Hero className="mt-20" />

      <Pros className="mt-20" />

      <LearnWithUs className="mt-20  py-10" />

      <Testimonials className="mt-20" />
    </main>
  )
}
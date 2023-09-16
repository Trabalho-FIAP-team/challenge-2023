import Hero from "@/components/hero";
import Pros from "@/components/pros";
import LearnWithUs from "@/components/learn-with-us";
import Testimonials from "@/components/testimonials";
import AboutUs from "@/components/about-us";

export default function RootPage() {
  return (
    <main className="w-center mt-20 space-y-20">
      <Hero />
      <Pros />
      <LearnWithUs className="py-6" />
      <Testimonials  />
      <AboutUs />
    </main>
  )
}
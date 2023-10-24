import Hero from "@/components/hero";
import Pros from "@/components/pros";
import LearnWithUs from "@/components/learn-with-us";
import Testimonials from "@/components/testimonials";
import AboutUs from "@/components/about-us";
import Events from "@/components/events";

export default function RootPage() {
  return (
    <main className="w-center space-y-20">
      <Hero />
      <Pros />
      <Events />
      <LearnWithUs className="py-6" />
      <Testimonials  />
      <AboutUs />
    </main>
  )
}
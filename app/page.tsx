import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Waves from "@/components/waves/waves";
import Skills from "@/components/skills/skills";
import "@/styles/reset.scss";
import Experience from "@/components/experience/experience";
import Work from "@/components/work/work";
import Testimonials from "@/components/testimonials/testimonials";
import Contact from "@/components/contact/contact";
import GetInTouch from "@/components/getInTouch/getInTouch";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Waves />
      <Skills />
      <Experience />
      <Work />
      <Testimonials />
      <Contact />
      <GetInTouch />
    </div>
  );
}

import AboutUs from "@/components/Home/AboutUs";
import Hero from "@/components/Home/Hero";
import Participate from "@/components/Home/Participate";
import Team from "@/components/Home/Team";
import Visibility from "@/components/Home/Visibilty";
import NewsLetter from "@/components/Sponsor/NewsLetter";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Visibility />
      <Participate />
      <Team />
      <NewsLetter />
    </main>
  );
}

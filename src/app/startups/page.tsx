import NewsLetter from "@/components/Sponsor/NewsLetter";
import JourneyToStage from "@/components/Startups/JourneyToStage";
import Opportunities from "@/components/Startups/opportunities";
import StartUpCTA from "@/components/Startups/startUpCTA";
import StartUpHero from "@/components/Startups/startUpHero";

export default function Startups() {
  return (
    <main style={{ background: "#031632", overflow: "hidden" }}>
      <StartUpHero />
      <Opportunities />
      <JourneyToStage />
      <StartUpCTA />
      <NewsLetter />
    </main>
  );
}

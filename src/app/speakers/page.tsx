import PreviousSpeakers from "@/components/Speakers/previousSpeakers";
import SpeakerCTA from "@/components/Speakers/speakerCTA";
import SpeakersHero from "@/components/Speakers/speakersHero";
import NewsLetter from "@/components/Sponsor/NewsLetter";

export default function Explore() {
  return (
    <main>
      <SpeakersHero />
      <PreviousSpeakers />
      <SpeakerCTA />
      <NewsLetter />
    </main>
  );
}

import NewsLetter from "@/components/Sponsor/NewsLetter";
import VolunteerHero from "@/components/Volunteers/volunteerHero";
import VolunteerCTA from "@/components/Volunteers/volunteerCTA";

export default function VolunteerPage() {
  return (
    <main style={{ background: "#031632", overflow: "hidden" }}>
      <VolunteerHero />
      <VolunteerCTA />
      <NewsLetter />
    </main>
  );
}

import NewsLetter from "@/components/Sponsor/NewsLetter";
import VolunteerHero from "@/components/Volunteers/volunteerHero";
import VolunteerHero2 from "@/components/Volunteers/volunteerHero2";

export default function VolunteerPage() {
  return (
    <main style={{ background: "#031632", overflow: "hidden" }}>
      <VolunteerHero />
      <VolunteerHero2 />
      <NewsLetter />
    </main>
  );
}

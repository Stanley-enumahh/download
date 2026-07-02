// src/app/sponsor/page.tsx
import SponsorHero from "@/components/Sponsor/SponsorHero";
import SponsorCTA from "@/components/Sponsor/SponsorCTA";
import NewsLetter from "@/components/Sponsor/NewsLetter";

export default function SponsorPage() {
  return (
    <main style={{ background: "#031632", overflow: "hidden" }}>
      <SponsorHero />
      <SponsorCTA />
      <NewsLetter />
    </main>
  );
}

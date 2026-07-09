import NewsLetter from "@/components/Sponsor/NewsLetter";
import TicketHero from "@/components/tickets/ticketHero";
import TicketTiers from "@/components/tickets/ticketTiers";

export default function Explore() {
  return (
  <main style={{ background: "#031632", overflow: "hidden" }}>
      <TicketHero />
      <TicketTiers />
      <NewsLetter />
    </main>
  );
}

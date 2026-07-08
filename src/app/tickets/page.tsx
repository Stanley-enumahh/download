import NewsLetter from "@/components/Sponsor/NewsLetter";
import TicketHero from "@/components/tickets/ticketHero";
import TicketTiers from "@/components/tickets/ticketTiers";

export default function Explore() {
  return (
    <main>
      <TicketHero />
      <TicketTiers />
      <NewsLetter />
    </main>
  );
}

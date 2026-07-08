import Image from "next/image";
import accessTicket from "@/images/tickets/access.png";
import devTicket from "@/images/tickets/dev.png";
import architectTicket from "@/images/tickets/architect.png";
import founderTicket from "@/images/tickets/founder.png";
import unicornTicket from "@/images/tickets/unicorn.png";

export default function TicketTiers() {
  return (
    <section className="bg-[#031632] py-20 flex px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <span className="flex items-center w-full justity-center gap-5 justify-center">
          <hr className="hidden md:flex w-[35%] border-white/30" />
          <p className="text-[#83CFFF] text-sm">Ticket Tiers</p>
          <hr className="hidden md:flex w-[35%] border-white/30" />
        </span>

        {/* Top row — 3 tickets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Image
            src={accessTicket}
            alt="Access Ticket"
            className="w-full h-auto rounded-2xl"
          />
          <Image
            src={devTicket}
            alt="Dev Ticket"
            className="w-full h-auto rounded-2xl"
          />
          <Image
            src={architectTicket}
            alt="Architect Ticket"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Bottom row — 2 tickets centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-2xl md:mx-auto w-full">
          <Image
            src={founderTicket}
            alt="Founder Ticket"
            className="w-full h-auto rounded-2xl"
          />
          <Image
            src={unicornTicket}
            alt="Unicorn Ticket"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

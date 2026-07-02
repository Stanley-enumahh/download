import Image from "next/image";
import logo from "@/images/Logo.png";
import neddi from "@/images/neddi.png";

export default function TicketHero() {
  return (
    <section className="bg-[#031632] min-h-screen flex items-center justify-center px-6 md:px-16">
      <div className="flex flex-col items-center text-center gap-8 max-w-4xl">
        {/* Partnership badge */}
        <div className="flex items-center gap-3">
          <Image src={logo} alt="Download" className="h-8 w-auto" />
          <span className="border border-white/20 text-white/70 text-sm px-4 py-1.5 rounded-full">
            In Partnership with
          </span>
          <Image src={neddi} alt="NEDDI" className="h-8 w-auto" />
        </div>

        {/* Heading */}
        <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Secure Your Spot at Download Tech Event
        </h2>

        {/* Subtext */}
        <p className="text-white/50 text-base md:text-lg max-w-2xl leading-relaxed">
          Reserve your place at Download Tech Event and experience the ideas,
          people, and innovations driving Africa's digital future.
        </p>
      </div>
    </section>
  );
}

import { BsMicFill } from "react-icons/bs";
import { LuMic } from "react-icons/lu";

export default function SpeakerCTA() {
  return (
    <section className="bg-(--navy) py-18 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#F4863633] to-transparent rounded-xl py-22 px-6 flex flex-col items-center text-center gap-4">
          <LuMic size={40} className="text-[#F48636]" />

          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            Have an idea worth sharing?
          </h2>

          <p className="text-white/60 text-sm md:text-base max-w-2xl leading-relaxed">
            We are always looking for innovative voices to join our stages.
            Submit your talk proposal for Download Tech 2026.
          </p>

          <a
            href="#"
            className="flex mt-2 items-center gap-2 bg-[#c8e63c] hover:opacity-90 transition-opacity text-[#031632] font-bold px-10 py-4 rounded-[12px] text-[15px] shadow-[3px_6px_0_rgba(244,134,54,1)]"
          >
            <BsMicFill size={16} />
            Become a Speaker
          </a>
        </div>
      </div>
    </section>
  );
}

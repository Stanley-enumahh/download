import { BsRocketTakeoff } from "react-icons/bs";
import { LuHandHelping } from "react-icons/lu";
import { MdHandshake } from "react-icons/md";

export default function SponsorCTA() {
  return (
    <section className=" h-screen flex justify-between items-center relative">
      <div className="absolute bg-radial from-[#83CFFF]/15 blur-xl top-15 right-60 to-transparent h-107.5 w-107.5"></div>

      <div className="w-fit mx-auto flex flex-col items-center text-center gap-6 z-10">
        <span className="flex items-center gap-2 bg-[#0d2a52] text-[#83CFFF] border-[#83CFFF1A] border text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-[13px] w-fit">
          <BsRocketTakeoff size={15} />
          Sponsorship Opportunities
        </span>

        <h2 className="text-2xl text-[#D3E4FE] max-w-3xl md:max-w-5xl md:text-5xl font-bold leading-tight">
          Partner with Africa's Digital Future
        </h2>

        <p className="text-white/50 font-medium text-base max-w-2xl md:max-w-3xl">
          Elevate your brand visibility, connect with elite tech talent, and
          drive meaningful community impact at the continent's premier
          technology summit.
        </p>

        <button className="flex items-center gap-2 text-black cursor-pointer bg-[#BDD733] shadow-[#F48636] shadow-md transition-colors font-medium px-8 py-4 rounded-xl text-sm mt-2">
          <LuHandHelping size={18} />
          Become a Sponsor
        </button>
      </div>
    </section>
  );
}

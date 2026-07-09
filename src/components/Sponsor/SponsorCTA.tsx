import { BsRocketTakeoff } from "react-icons/bs";
import { LuHandHelping } from "react-icons/lu";

export default function SponsorCTA() {
  return (
    <section className="relative flex h-screen items-center justify-between px-6 md:px-10">
      <div className="absolute top-15 right-60 h-107.5 w-107.5 bg-radial from-[#83CFFF]/15 to-transparent blur-xl"></div>

      <div className="z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-center">
        <span className="flex w-fit items-center gap-2 rounded-[13px] border border-[#83CFFF1A] bg-[#0d2a52] px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#83CFFF]">
          <BsRocketTakeoff size={15} />
          Sponsorship Opportunities
        </span>

        <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#D3E4FE] sm:text-4xl md:text-5xl">
          Partner with Africa's Digital Future
        </h2>

        <p className="max-w-2xl text-base font-medium text-white/50">
          Elevate your brand visibility, connect with elite tech talent, and
          drive meaningful community impact at the continent's premier
          technology summit.
        </p>

        <a
          href=" https://forms.gle/p2wMFS1eHgyyA6yq6"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex cursor-pointer items-center gap-2 rounded-xl bg-[#BDD733] px-8 py-4 text-sm font-medium text-black shadow-[3px_6px_0_rgba(244,134,54,1)] transition-colors"
        >
          <LuHandHelping size={18} />
          Become a Sponsor
        </a>
      </div>
    </section>
  );
}

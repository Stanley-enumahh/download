import { LuHandHeart, LuRocket } from "react-icons/lu";

export default function VolunteerCTA() {
  return (
    <section className="flex flex-col relative gap-6 ma-w-5xl py-37.5 justify-center items-center px-6 md:px-25 bg-(--navy)">
      <div className="absolute bg-radial from-[#83CFFF]/15 blur-xl top-20 right-35 to-transparent h-100 w-100"></div>
      <span className="flex uppercase items-center text-[#83CFFF] gap-2 bg-[#83CFFF]/20 border-[#83CFFF33]/80 text-xs font-medium px-4 py-2 rounded-full w-fit">
        <LuRocket size={16} />
        Volunteer certification
      </span>

      <h1 className="text-white text-3xl font-bold md:text-5xl text-center">
        Be the Force Behind Africa's Digital Future
      </h1>
      <p className="md:text-base text-center text-sm text-[#C5C6CE] max-w-3xl">
        Work alongside innovators, connect with top industry leaders, and
        contribute to a technology summit shaping Africa's digital future.
      </p>
      <a
        href="https://forms.gle/X4m9kSKw6iNHzbiUA"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#BDD733] flex items-center flex-row gap-3 rounded-lg text-sm font-semibold text-black px-8 py-3 shadow-[3px_6px_0_rgba(244,134,54,1)]"
      >
        <LuHandHeart /> <p>Be a Volunteer</p>
      </a>
    </section>
  );
}

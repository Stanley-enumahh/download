import volunteer from "@/images/volunteer.png";
import Image from "next/image";
import { VscKey } from "react-icons/vsc";

export default function VolunteerHero() {
  return (
    <section className=" pt-36 pb-24 px-6 md:px-16 relative">
      {/* glow */}
      <div className="absolute bg-radial from-[#83CFFF]/15 blur-xl -top-40 left-75  to-transparent h-107.5 w-107.5"></div>
      <div className="max-w-7xl gap-6 md:justify-between mx-auto flex flex-col md:flex-row items-center z-10">
        {/* Left: text */}
        <div className="md:w-2/5 flex flex-col gap-4">
          <span className="flex items-center text-[#83CFFF] gap-2 bg-[#83CFFF]/20 border-[#83CFFF33]/80 text-sm font-medium px-4 py-2 rounded-full w-fit">
            <VscKey size={16} />
            Volunteering
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#D3E4FE] leading-tight">
            Why you should <br /> be a Volunteer at <br /> Download 2026
          </h1>

          <p className="text-[#C5C6CE] text-base leading-relaxed max-w-sm">
            Build valuable connections, gain hands-on experience, and help shape
            transformative tech experiences at Nnewi's leading innovation and
            technology summit.
          </p>
        </div>

        <div className="flex-1 w-full">
          <Image
            src={volunteer}
            alt="volunteer hero image"
            className="w-full aspect-video"
          />
        </div>
      </div>
    </section>
  );
}

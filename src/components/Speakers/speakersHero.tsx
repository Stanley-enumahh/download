import explore from "@/images/explore.png";
import Image from "next/image";
import { IoIosMic } from "react-icons/io";

export default function SpeakersHero() {
  return (
    <section className="pt-36 pb-24 px-6 md:px-16 relative bg-(--navy)">
      {/* glow */}
      <div className="absolute bg-radial from-[#83CFFF]/15 blur-xl -top-40 left-75 to-transparent h-107.5 w-107.5" />

      <div className="max-w-7xl gap-6 md:justify-between mx-auto flex flex-col md:flex-row items-center z-10">
        {/* Left: text — smaller */}
        <div className="md:w-2/5 flex flex-col gap-4">
          <span className="flex items-center text-[#83CFFF] gap-2 bg-[#83CFFF]/20 border border-[#83CFFF33]/80 text-sm font-medium px-4 py-2 rounded-full w-fit">
            <IoIosMic size={16} />
            Speakers
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#D3E4FE] leading-tight">
            Inspire the Next Generation of Innovators
          </h1>

          <p className="text-[#C5C6CE] text-base leading-relaxed">
            Share your expertise, elevate your influence, and{" "}
            <br className="md:flex hidden" /> help shape the future of
            technology on a global stage of innovation.
          </p>
        </div>

        {/* Right: image  */}
        <div className="md:w-[55%] w-full">
          <Image
            src={explore}
            alt="Explore hero image"
            className="w-full aspect-video object-cover"
          />
        </div>
      </div>
    </section>
  );
}

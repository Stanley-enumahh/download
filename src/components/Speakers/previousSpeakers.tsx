import Image from "next/image";
import { BsBuilding } from "react-icons/bs";
import amina from "@/images/speakers/anima.png";
import samuel from "@/images/speakers/samuel.png";
import sarah from "@/images/speakers/sarah.png";

// const keynotes = [
//   {
//     img: amina,
//     tag: "OPENING KEYNOTE",
//     name: "Dr. Amina Diallo",
//     role: "Chief AI Scientist",
//     company: "FutureScale Solutions",
//   },
//   {
//     img: samuel,
//     tag: "CLOSING KEYNOTE",
//     name: "Samuel Osei",
//     role: "Founder & CEO",
//     company: "Nexus Finance",
//   },
// ];

// const otherSpeakers = [
//   {
//     img: sarah,
//     topic: "AI & ML",
//     name: "Sarah Mensah",
//     role: "Lead Machine Learning Engineer",
//     company: "DataBricks Africa",
//   },
//   {
//     img: sarah,
//     topic: "Design Systems",
//     name: "David Okafor",
//     role: "Head of Product Design",
//     company: "Stripe",
//   },
//   {
//     img: sarah,
//     topic: "Product Strategy",
//     name: "Nneka Uzo",
//     role: "VP of Product",
//     company: "Spotify",
//   },
//   {
//     img: sarah,
//     topic: "Fintech",
//     name: "Kwame Mensah",
//     role: "Co-Founder",
//     company: "PayStack",
//   },
// ];

const keynotes = [
  {
    img: amina,
    tag: "OPENING KEYNOTE",
    name: "Guess Who?",
    role: "Speaker to be announced",
    company: "Coming Soon",
  },
  {
    img: samuel,
    tag: "CLOSING KEYNOTE",
    name: "Guess Who?",
    role: "Speaker to be announced",
    company: "Coming Soon",
  },
];

const otherSpeakers = [
  {
    img: sarah,
    topic: "Coming Soon",
    name: "Guess Who?",
    role: "Speaker to be announced",
    company: "To Be Revealed",
  },
  {
    img: sarah,
    topic: "Coming Soon",
    name: "Guess Who?",
    role: "Speaker to be announced",
    company: "To Be Revealed",
  },
  {
    img: sarah,
    topic: "Coming Soon",
    name: "Guess Who?",
    role: "Speaker to be announced",
    company: "To Be Revealed",
  },
  {
    img: sarah,
    topic: "Coming Soon",
    name: "Guess Who?",
    role: "Speaker to be announced",
    company: "To Be Revealed",
  },
];

export default function PreviousSpeakers() {
  return (
    <section className="bg-[#031632] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="bg-[#83CFFF1A] text-[#83CFFF] text-xs font-semibold uppercase tracking-widest px-3 py-2 rounded-md">
            See Our Previous Speakers
          </span>
          <p className="text-white/50 text-base max-w-3xl leading-relaxed">
            Discover the visionaries, engineers, and creatives defining the next
            era of enterprise technology. Download Tech 2026 brings together the
            brightest minds shaping our digital future.
          </p>
        </div>

        {/* Keynote visionaries */}
        <div className="flex flex-col gap-8">
          <span className="flex items-center w-full gap-5 justify-center">
            <hr className="w-[40%] border-white/10" />
            <p className="text-center text-[#83CFFF] text-xs font-semibold uppercase tracking-widest">
              Keynote Visionaries
            </p>
            <hr className="w-[40%] border-white/10" />
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keynotes.map((speaker) => (
              <div
                key={speaker.name}
                className="relative rounded-lg border border-white/3 overflow-hidden h-80 md:h-115 bg-[#0d2140]"
              >
                {/*  image */}

                <div className="absolute inset-0 bg-linear-to-br from-[#0E2A4F] via-[#123764] to-[#0B1F3A] flex items-center justify-center">
                  <span className="text-white/15 text-3xl md:text-5xl font-bold uppercase tracking-[0.3em]">
                    Guess Who?
                  </span>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#031632]/80 via-[#031632]/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-4 md:p-6 flex flex-col gap-2">
                  <span className="border border-[#83CFFF4D] flex items-center gap-2 bg-[#0d2140]/80 backdrop-blur-sm text-[#83CFFF] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#83CFFF]" />
                    {speaker.tag}
                  </span>
                  <h3 className="text-white text-2xl md:text-4xl font-bold leading-tight">
                    {speaker.name}
                  </h3>
                  <p className="text-[#B6C7EB] text-sm">{speaker.role}</p>
                  <p className="flex items-center gap-2 text-[#C5C6CE] text-sm">
                    <BsBuilding size={13} />
                    {speaker.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other speakers */}
        <div className="flex flex-col gap-8">
          <span className="flex items-center w-full gap-5 justify-center">
            <hr className="w-[40%] border-white/10" />
            <p className="text-center text-[#83CFFF] text-xs font-semibold uppercase tracking-widest">
              Other Speakers
            </p>
            <hr className="w-[40%] border-white/10" />
          </span>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {otherSpeakers.map((speaker) => (
              <div
                key={speaker.name}
                className="bg-[#0a1e35] rounded-xl p-3 md:p-7 border border-white/10 backdrop-blur-md flex flex-col gap-4"
              >
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full border-2 border-[#1a3a5c] bg-[#102A47] flex items-center justify-center">
                  <span className="text-[#83CFFF] text-xs font-bold">?</span>
                </div>

                {/* Topic tag */}
                <span className="bg-[#020F22] text-white/60 text-xs px-3 py-1 rounded-sm w-fit">
                  {speaker.topic}
                </span>

                {/* Info */}
                <div className="flex flex-col gap-1">
                  <h4 className="text-white font-semibold text-base">
                    {speaker.name}
                  </h4>
                  <p className="text-white/50 text-xs">{speaker.role}</p>
                  <p className="text-white/70 text-xs">{speaker.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

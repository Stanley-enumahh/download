import { FaHandshake } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { BsClipboardData, BsGraphUpArrow } from "react-icons/bs";
import { IoRocketSharp } from "react-icons/io5";
import { MdLightbulbOutline, MdOutlineGroup } from "react-icons/md";

const prizes = [
  {
    title: "₦500,000 Grand Prize",
    description:
      "Equity-free cash injection to accelerate your growth and scale operations.",
  },
  {
    title: "₦300,000 Second Runner-Up",
    description:
      "Secure equity-free funding to accelerate growth, scale operations, and transform bold ideas into lasting impact.",
  },
  {
    title: "Media Campaign",
    description:
      "Featured editorial coverage across major African and global tech publications.",
  },
];

const criteria = [
  {
    icon: <MdLightbulbOutline size={23} className="text-[#4a90d9]" />,
    title: "Innovation & Product",
    description:
      "Uniqueness of the solution, technical complexity, and defensibility of the IP.",
  },
  {
    icon: <BsGraphUpArrow size={23} className="text-[#4a90d9]" />,
    title: "Market Potential",
    description:
      "Total addressable market size, go-to-market strategy, and scalability across borders.",
  },
  {
    icon: <MdOutlineGroup size={23} className="text-[#4a90d9]" />,
    title: "Team Execution",
    description:
      "Founding team's domain expertise, past achievements, and ability to execute the vision.",
  },
];

export default function Opportunities() {
  return (
    <section className="bg-(--navy) py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-14 relative">
        {/* glow */}
        <div className="absolute bg-radial from-[#83CFFF]/15 blur-xl top-[100px] md:-top-10 right-25 to-transparent h-107.5 w-107.5" />

        {/* Header */}
        <h2 className="text-[#D3E4FE] text-2xl md:text-5xl font-bold text-center">
          Unmatched Opportunities
        </h2>

        {/* Top cards */}
        <div className="flex flex-col md:flex-row md:h-75 gap-6 z-10">
          {/* Startup Pitch — large card */}
          <div className="border w-full md:w-[80%] border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-16 bg-[#0a1e35]">
            <IoRocketSharp size={32} className="text-[#08B6FB]" />
            <div className="flex flex-col gap-5 md:gap-3">
              <h3 className="text-[#D3E4FE] text-xl md:text-2xl font-bold">
                Startup Pitch Competition
              </h3>
              <p className="text-[#C5C6CE] text-sm leading-relaxed">
                Take the main stage in front of 1,000+ attendees. Present your
                vision, demonstrate traction, and compete for equity-free
                funding and extensive media coverage.
              </p>
            </div>
          </div>

          {/* Investor Matchmaking — small card */}
          <div className="w-full md:w-[30%] backdrop-blur-lg rounded-2xl border border-white/10 p-6 md:p-8 flex flex-col gap-4 bg-white/3">
            <FaHandshake size={28} className="text-(--orange)" />
            <h3 className="text-[#D3E4FE] text-xl font-bold">
              Investor Matchmaking
            </h3>
            <p className="text-[#C5C6CE] text-sm leading-relaxed">
              Present your startup to a curated audience of investors, venture
              capitalists, and ecosystem leaders driving innovation across
              emerging markets.
            </p>
          </div>
        </div>

        {/* Bottom — Prizes + Judging Criteria */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Prizes */}
          <div className="flex flex-col gap-5">
            <h3 className="flex items-center gap-2 text-[#D3E4FE] text-xl font-bold">
              <FaTrophy size={18} className="text-(--orange)" />
              The Prizes
            </h3>
            <div className="flex flex-col gap-4">
              {prizes.map((prize) => (
                <div
                  key={prize.title}
                  className="border border-white/4 rounded-md p-5 flex flex-col gap-3 bg-[#0a1e35] border-l-2 border-l-(--orange)"
                >
                  <h4 className="text-[#D3E4FE] font-bold text-base">
                    {prize.title}
                  </h4>
                  <p className="text-[#C5C6CE] text-sm leading-relaxed">
                    {prize.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Judging Criteria */}
          <div className="flex flex-col gap-5">
            <h3 className="flex items-center gap-2 text-[#D3E4FE] text-xl font-bold">
              <BsClipboardData size={18} className="text-[#08B6FB]" />
              Judging Criteria
            </h3>
            <div className="border border-white/3 h-fit md:h-90 rounded-2xl p-4 md:p-6 flex flex-col gap-6 bg-[#0a1e35]">
              {criteria.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="mt-0.5 shrink-0 text-[#08B6FB] border border-white/10 p-2 rounded bg-black/20">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[#D3E4FE] font-semibold text-sm">
                      {item.title}
                    </h4>
                    <p className="text-[#C5C6CE] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

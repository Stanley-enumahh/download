import { MdOutlineSupportAgent } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

const phones = ["+234 7045375814", "+234 8164568682"];

export default function TicketHelp() {
  return (
    <section className="bg-[#031632] py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto bg-lineart-to-br from-[#F4863633]/20 to-[#031632]/20 border-white/20">
        <div className="bg-[#0d1f35] rounded-3xl py-16 px-6 flex flex-col items-center text-center gap-6">
          <MdOutlineSupportAgent size={40} className="text-(--orange)" />

          <div className="flex flex-col gap-3">
            <h2 className="text-[#D3E4FE] font-jakarta text-3xl md:text-4xl font-bold">
              Need Help Choosing a Tier
            </h2>
            <p className="text-[#C7C4D8] text-base max-w-lg mx-auto leading-relaxed">
              Our team is available to assist with group registrations,
              corporate sponsorships, and general inquiries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            {phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 border border-[#1E293BB2] hover:border-[#1E293BB2]/30 transition-colors text-white px-6 py-3 rounded-xl text-sm font-medium"
              >
                <LuPhone size={16} className="text-white/60" />
                <span>
                  <span className="font-bold">+234</span>
                  {phone.replace("+234", "")}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

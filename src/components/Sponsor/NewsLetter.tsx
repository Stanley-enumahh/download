import Image from "next/image";
import newsletterImg from "@/images/newsletter.jpg";

export default function NewsLetter() {
  return (
    <section className="relative h-screen md:h-100 font-space w-full flex gap-6 justify-center items-center flex-col text-center px-6 md:px-16 overflow-hidden">
      <Image
        src={newsletterImg}
        alt="Newsletter background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 space-y-6 md:px-0 justify-center px-6 max-w-3xl">
        <h1 className="font-bold text-3xl md:text-5xl">Get Updates</h1>

        <p className="font-bold text-base md:text-xl">
          Subscribe to our newsletter for the latest updates, speaker
          announcements, and exclusive insights from Download.
        </p>

        <div className="bg-white flex flex-row w-full justify-between px-4 md:px-6 items-center py-4 rounded-lg">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter email address"
            className="outline-none border-none md:text-base text-sm placeholder:font-semibold md:placeholder:font-bold placeholder:text-[#121212]/70 text-black"
          />
          <button className="bg-(--orange) text-sm md:text-base rounded-lg px-4 md:px-12 py-2 md:py-3 border border-black">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

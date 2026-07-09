import Image from "next/image";
import logo from "@/images/Logo.png";
import star1 from "@/images/Star2.png";
import star2 from "@/images/Star2.png";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col h-fit bg-(--navy) w-full px-5 md:px-15 pt-8 pb-3 gap-20 relative">
      {/* stars */}

      <Image src={star1} alt="star" className="absolute bottom-4 left-8" />
      <Image
        src={star2}
        alt="star"
        className="absolute top-[45%] md:top-40 right-6"
      />

      <section className="flex flex-col gap-16 md:flex-row justify-between">
        <div className="flex flex-col gap-4 max-w-xl">
          <Image src={logo} alt="logo" className="w-40 object-center h-fit" />

          <p className="text-sm text-neutral-300 leading-loose">
            Download is a forward-thinking annual conference that brings
            together bold minds, innovators, and digital leaders to explore how
            technology, media, and strategy can accelerate business growth,
            amplify brands, and shape the future.
          </p>

          <ul className="flex flex-row gap-5">
            <li className="border border-(--orange) cursor-pointer transition-all duration-200 rounded-full p-2 hover:bg-(--orange)">
              <a href="#">
                <FaXTwitter />
              </a>
            </li>
            <li className="border border-(--orange) cursor-pointer transition-all duration-200 rounded-full p-2 hover:bg-(--orange)">
              <a href="#">
                <SlSocialFacebook />
              </a>
            </li>
            <li className="border border-(--orange) cursor-pointer transition-all duration-200 rounded-full p-2 hover:bg-(--orange)">
              <a href="#">
                <IoLogoLinkedin />
              </a>
            </li>
            <li className="border border-(--orange) cursor-pointer transition-all duration-200 rounded-full p-2 hover:bg-(--orange)">
              <a href="#">
                <IoLogoYoutube />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-row gap-16">
          <div className="space-y-4">
            <h2 className="font-bold md:text-base text-sm">EXPLORE</h2>
            <ul className="space-y-4 md:text-sm text-base">
              <li className="font-medium text-sm">
                <Link href="/">About us</Link>
              </li>
              <li className="font-medium text-sm">
                <Link href="">Blog</Link>
              </li>
              <li className="font-medium text-sm">
                <Link href="/contact">Contact us</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold md:text-base text-sm">EXPLORE</h2>
            <ul className="space-y-4 md:text-sm text-base">
              <li className="font-medium text-sm">
                <Link href="/sponsor">Sponsors</Link>
              </li>
              <li className="font-medium text-sm">
                <Link href="/speakers">Speakers</Link>
              </li>
              <li className="font-medium text-sm">
                <Link href="/gallery">Gallery</Link>
              </li>
              <li className="font-medium text-sm">
                <Link href="/volunteers">Volunteers</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center font-jakarta font-medium flex-col items-center gap-4 md:gap-8">
        <h1 className="font-jakarta text-xl md:text-4xl font-bold">
          Dream, Develop, Dominate.
        </h1>

        <span className="flex text-xs md:text-sm text-neutral-400 flex-row gap-5 items-center">
          <p>Terms & Conditions</p>

          <p>Privacy Policy</p>
        </span>

        <p className="border-t border-t-[#BDD733] text-neutral-400 text-xs w-full flex justify-center p-4">
          ICEHUB © {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import logo from "@/images/Logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Explore",
    href: "#",
    dropdown: true,
    children: [
      { label: "Speakers", href: "/speakers" },
      { label: "Startups", href: "/startups" },
      { label: "Volunteers", href: "/volunteers" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Sponsor", href: "/sponsor" },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed font-space top-0 left-0 w-full z-50 bg-(--navy)">
      <div className="flex items-center justify-between px-5 md:px-10 py-3">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={logo}
            alt="logo"
            className="w-28 md:w-36 h-auto object-contain"
          />
        </Link>

        {/* Desktop links + CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setExploreOpen(!exploreOpen)}
                      className={`flex items-center gap-1 text-sm transition-colors whitespace-nowrap ${
                        exploreOpen
                          ? "text-(--orange) border-b border-(--orange) pb-1"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <FiChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${exploreOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {exploreOpen && (
                      <div className="absolute top-full left-0 mt-3 w-40 rounded-xl bg-(--navy) border border-white/10 overflow-hidden shadow-xl">
                        {link.children?.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setExploreOpen(false)}
                            className={`block px-4 py-3 text-sm transition-colors hover:bg-white/5 ${
                              isActive(child.href)
                                ? "text-(--orange)"
                                : "text-white/80 hover:text-white"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setExploreOpen(false)}
                    className={`text-sm whitespace-nowrap transition-colors ${
                      isActive(link.href)
                        ? "text-(--orange) border-b border-(--orange) pb-1"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <a
            href="#tickets"
            className="flex items-center gap-2 bg-(--orange) px-4 py-2.5 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90 whitespace-nowrap shrink-0"
          >
            Buy Tickets <HiArrowTrendingUp size={16} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-(--navy) border-t border-white/10 flex flex-col gap-4 px-6 py-6 transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen
            ? "opacity-100 max-h-screen visible"
            : "opacity-0 max-h-0 invisible"
        }`}
      >
        {navLinks.map((link) =>
          link.dropdown ? (
            <div key={link.label} className="flex flex-col gap-2">
              <span className="text-white/50 text-xs uppercase tracking-widest">
                {link.label}
              </span>
              {link.children?.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm pl-3 ${
                    isActive(child.href) ? "text-(--orange)" : "text-white/80"
                  }`}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm ${
                isActive(link.href) ? "text-(--orange)" : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ),
        )}

        <a
          href="#tickets"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-semibold text-sm w-fit bg-(--orange) mt-2"
        >
          Buy Tickets <HiArrowTrendingUp size={16} />
        </a>
      </div>
    </nav>
  );
}

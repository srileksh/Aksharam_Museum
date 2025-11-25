"use client";

import { useState } from "react";
import Link from "next/link";
import { imgAksharamLogo8X8Cm1, imgIonTicket } from "@/lib/assets";
import { usePathname } from "next/navigation";
import { IoTicketSharp } from "react-icons/io5";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // ✅ Current route

  const navItems = [
    { name: "HOME", path: "/home" },
    { name: "SOVENIER SHOP", path: "" },
    { name: "EXHIBITIONS & EVENTS", path: "/exhibitions" },
    { name: "GALLERY", path: "/gallery" },
    { name: "ABOUT US", path: "/aboutUs" },
    { name: "FEEDBACK", path: "/feedback" },
  ];

  return (
    <header className="w-full bg-[#f8fbf1] fixed top-0 left-0 z-50 border-b border-[#e5e5e5]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 xl:px-12 sm:h-[80px] lg:h-[120px] flex items-center justify-between">
        {/* Logo */}
        <div className="h-[60px] w-[60px] lg:h-[96px] lg:w-[95px] py-2 flex-shrink-0">
          <Link href="/">
            <img
              src={imgAksharamLogo8X8Cm1}
              alt="Aksharam Museum"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`font-['Inter'] text-[12px] xl:text-[14px] font-semibold text-[#1c1b1b] px-3 py-1 xl:py-2 hover:text-[#ef3e3e] transition
                            ${
                              pathname === item.path
                                ? "text-[#ef3e3e]" // ACTIVE COLOR
                                : "text-[#1c1b1b] hover:text-[#ef3e3e]"
                            }
                `}
            >
              {item.name}
            </Link>
          ))}

          {/* BOOK TICKETS */}
          <Link
            href="/book-tickets"
            className={`flex items-center gap-2 bg-[#ef3e3e] px-4 py-3 rounded-[16px] text-white text-[14px] font-medium
                        ${
                          pathname === "/book-tickets"
                            ? "bg-[#d72c2c]" // darker red for active
                            : "bg-[#ef3e3e] hover:bg-[#d72c2c]"
                        }
            `}
          >
            <p className="text-[22px]"><IoTicketSharp/></p> 
            BOOK TICKETS
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md"
        >
          {!open ? (
            <svg
              width="26"
              height="20"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            >
              <path d="M3 4h20M3 10h20M3 16h20" />
            </svg>
          ) : (
            <svg
              width="26"
              height="20"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            >
              <path d="M4 4l18 12M22 4L4 16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#f8fbf1] border-t border-[#ddd] overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)} // CLOSE MENU ON CLICK
              className={`py-2 text-left font-['Inter'] text-[15px] font-medium text-[#1c1b1b] hover:text-[#ef3e3e] transition
                            ${
                              pathname === item.path
                                ? "text-[#ef3e3e]" // ACTIVE MOBILE
                                : "text-[#1c1b1b] hover:text-[#ef3e3e]"
                            }
              `}
            >
              {item.name}
            </Link>
          ))}

          {/* BOOK TICKETS (Mobile) */}
          <Link
            href="/book-tickets"
            onClick={() => setOpen(false)}
            className={`mt-3 flex items-center gap-2 bg-[#ef3e3e] px-4 py-3 rounded-[16px] text-white text-[14px]  font-medium justify-center
                        ${
                          pathname === "/book-tickets"
                            ? "bg-[#d72c2c]" // darker red for active
                            : "bg-[#ef3e3e] hover:bg-[#d72c2c]"
                        }
            `}
          >
            <img src="/ticket.svg" alt="ticket" />
            BOOK TICKETS
          </Link>
        </div>
      </div>
    </header>
  );
}

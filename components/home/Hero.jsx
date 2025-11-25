// components/HeroWithWelcomeCard.jsx
import {
  imgImg202507271809472,
  imgLine1,
  imgIonTicket,
  imgJamAlert,
} from "@/lib/assets";

export default function Hero() {
  return (
    <div className="relative w-full">
      {/* ===========================
          HERO BACKGROUND
      ============================ */}

      <div className="w-full h-[400px] sm:h-[500px] md:h-[700px] xl:h-[728px] relative overflow-hidden">
        {/* Background Image */}
        <img
          src="/home.png"
          className="w-full h-full object-cover  absolute inset-0"
          alt="Hero Background"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-[#0000003f]"></div>
      </div>

      {/* ===========================
          HERO TEXT CONTENT
      ============================ */}
      <div
        className="
          absolute bottom-10 sm:bottom-[150px] xl:bottom-[200px] 2xl:bottom-[100px] 
          left-[18px] sm:left-[72px] md:translate-x-0 
        
          text-white font-['Inter']
          px-4 md:px-0  "
      >
        <h1
          className="
            font-medium leading-none
            text-[40px] sm:text-[55px] md:text-[70px] 2xl:text-[96px]
          "
        >
          AKSHARAM
        </h1>

        <p
          className="
            mt-4
            text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]
            leading-[100%]
          "
        >
          Discover how language shaped our past and connects our future.
          <br className="hidden sm:block" />
          <br className="hidden sm:block" />
          Explore the voices that built civilizations.
        </p>
      </div>

      {/* ===========================
          RESPONSIVE WELCOME CARD
      ============================ */}
      {/*  */}
    </div>
  );
}

/* Shared Reusable Button */
function ActionButton({ red, icon, label }) {
  return (
    <button
      className={`
        flex items-center gap-2 px-4 py-3 rounded-[16px]
        w-full md:w-[304px]
        justify-center md:justify-start
        ${red ? "bg-[#ef3e3e]" : "bg-white"}
      `}
    >
      <img src={icon} className="size-[24px]" alt="" />
      <p
        className={`
          text-[15px] sm:text-[16px]
          ${red ? "text-white font-semibold" : "text-[#191d17] font-medium"}
        `}
      >
        {label}
      </p>
    </button>
  );
}

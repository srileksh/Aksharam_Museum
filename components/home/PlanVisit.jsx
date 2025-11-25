import { imgRectangle18, imgRectangle19, imgRectangle20 } from "@/lib/assets";

export default function PlanVisit() {
  return (
    <div className="w-full flex flex-col gap-8 mt-8">
      {/* HEADING */}
      <p className="text-[24px] font-semibold text-[#43483f] ">
        PLAN YOUR VISIT
      </p>

      {/* MAIN FLEX WRAPPER */}
      <div
        className="
          flex flex-col xl:flex-row 
          gap-10 xl:gap-[60px]
          items-center xl:items-start
          w-full
        "
      >
        {/* LEFT — ROTATED IMAGE STACK */}
        <div>
          <img src="Frame.png" alt="" />
        </div>

        {/* RIGHT — TEXT */}
        <p
          className="
            w-full 
            xl:w-1/2
            text-[#43483f] 
            leading-7 sm:leading-8
            text-[14px] sm:text-[16px]
            px-2 md:px-6 xl:ps-40
          "
        >
          Step into a world where words, stories, and culture come alive! Plan
          your visit to explore interactive exhibits, guided tours, and
          inspiring collections that celebrate the power of language. Whether
          you’re a student, traveler, or curious explorer, every corner of the
          museum promises a new discovery. Make your visit memorable—plan your
          day with us and experience language like never before!
        </p>
      </div>
    </div>
  );
}

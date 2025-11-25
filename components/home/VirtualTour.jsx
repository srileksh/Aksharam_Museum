// components/VirtualTour.jsx
import { imgImg202509301106451 } from "@/lib/assets";

export default function VirtualTour() {
  return (
<div
  className="relative h-[280px] sm:h-[450px] 2xl:h-[528px] rounded-[16px] overflow-clip bg-[#828282] bg-cover bg-center"
  style={{
    backgroundImage: 'url("/virtual.png")',
  }}
>
  {/* Dark overlay — give it z-10 */}
  <div className="absolute inset-0 bg-[#00000070] z-10"></div>

  {/* Text box — must be positioned + higher z-index */}
  <div className="flex justify-center pt-[34px] relative z-20">
    <span className="text-white text-[16px] sm:text-[28px] xl:text-[30px] 2xl:text-[40px] font-semibold border border-white rounded-[32px] px-10 py-4">
      360 VIRTUAL TOUR
    </span>
  </div>
</div>


  );
}

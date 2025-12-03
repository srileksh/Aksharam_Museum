// // components/GalleryModal.jsx
// "use client";
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import { FaAngleRight } from "react-icons/fa6";
// import { FaAngleLeft } from "react-icons/fa6";

// export default function GalleryModal({ item, onPrev, onNext, onClose }) {
//   if (!item) return null;
// console.log(item);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-8  sm:p-12 xl:p-4">
//       {/* Modal container */}
//       <div className="relative w-full max-w-5xl bg-white rounded-md p-[30px] sm:p-[50px] xl:p-[80px] max-h-[95vh]">
//         {/* Close icon */}
//         <button
//           className="absolute -top-7 -right-7  text-white text-[25px] sm:text-[30px]"
//           onClick={onClose}
//         >
//           <IoMdCloseCircleOutline />
//         </button>
//         {/* Left Arrow */}
//         <button
//           type="button"
//           className=" absolute left-2 top-1/2 -translate-y-1/2 "
//           onClick={onPrev}
//         >
//           <p className="text-black text-[20px] sm:text-[30px]">
//             <FaAngleLeft />
//           </p>
//         </button>
//         {/* Right Arrow */}
//         <button
//           type="button"
//           className="absolute right-2 top-1/2 -translate-y-1/2"
//           onClick={onNext}
//         >
//           <p className="text-black text-[20px] sm:text-[30px]">
//             <FaAngleRight />
//           </p>{" "}
//         </button>
//         {/* Content wrapper */}
//         <div className="w-full flex flex-col md:flex-row gap-6 md:gap-7  justify-center">
//           {/* Image + side arrows */}
//           <div className=" w-full md:w-[70%] flex items-center justify-center">
//             {/* Image box */}
//             <div className="w-full max-w-[700px] h-[300px] sm:h-[380px] md:h-[520px] rounded-md overflow-hidden">
//               <img src={item.img} alt="" />
//             </div>
//           </div>

//           {/* Text Section */}
//           <div className="w-full md:w-[30%] text-start flex">
//             <div className=" text-start">
//               <h1 className="mb-2 font-['Inter'] text-[24px] md:text-[30px] font-semibold text-[#191d17]">
//                 {item.title}
//               </h1>

//               <p className="text-[16px] md:text-[18px] leading-[22px] text-[#43483f] ">
//                 {item.longDesc ??
//                   `Lorem ipsum dolor sit amet consectetur. Facilisis tortor tellus sed leo ornare venenatis tellus egestas. Neque adipiscing nullam ipsum fermentum malesuada. awsdfvgbhj dfgvhjb fyfjhkj dtddghgjhb dtrdyjghvhvhv ftdfyv ff jtfd gfgfh  gfgdg jfgf hjh  trdfhghjg  tdth jh vhfgcr hghhbj fdygjhb fhgn j`}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function GalleryModal({ item, onPrev, onNext, onClose }) {
  if (!item) return null;
console.log(item);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      {/* Wrapper to allow scroll on small screens */}
      <div className="relative w-full max-w-5xl bg-white rounded-lg p-4 sm:p-6 md:p-10 max-h-[95vh] overflow-auto">
        
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-black text-[28px] sm:text-[32px]"
          onClick={onClose}
        >
          <IoMdCloseCircleOutline />
        </button>

        {/* Content Layout */}
        <div className=" flex flex-col md:flex-row gap-6 md:gap-10">

          {/* Image Section */}
          <div className=" w-full md:w-[70%] flex justify-center items-center">

            {/* Left Arrow */}
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md text-xl sm:text-3xl"
            >
              <FaAngleLeft />
            </button>

            {/* Image */}
            <div className="w-full max-w-[700px] h-[250px] sm:h-[350px] md:h-[500px] rounded-md overflow-hidden bg-black/10">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Arrow */}
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md text-xl sm:text-3xl"
            >
              <FaAngleRight />
            </button>

          </div>

          {/* Text Section */}
          <div className="w-full md:w-[30%] text-start flex items-start">
            <div>
              <h1 className="font-['Inter'] text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-[#191d17] mb-3">
                {item.title}
              </h1>

              <p className="text-[15px] sm:text-[17px] leading-[22px] text-[#43483f]">
                {item.desc}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

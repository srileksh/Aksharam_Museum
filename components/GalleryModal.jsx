// // components/GalleryModal.jsx
// "use client";
// import { IoMdCloseCircleOutline } from "react-icons/io";

// const imgArrowLeft = "/gallery/icon-arrow-left.svg";
// const imgArrowRight = "/gallery/icon-arrow-right.svg";
// const imgClose = "/gallery/icon-close.svg";

// export default function GalleryModal({ item, onPrev, onNext, onClose }) {
//   if (!item) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-[70px] lg:px-[90px]">
//       {/* White modal frame */}
//       <div className="relative h-[640px]  w-full rounded-[8px] bg-white px-[20px] lg:px-[40px] py-[40px] ">
//         {/* Close */}
//         <button
//           className="absolute top-1 right-1 text-black text-[30px]"
//           onClick={onClose}
//         >
//           <IoMdCloseCircleOutline />
//         </button>
//         <div className="flex justify-center items-center  gap-[20px]  xl:gap-[40px]">
//           <div className="w-full lg:w-[70%]  flex gap-[20px]  justify-center items-center h-full">
//             {/* Left arrow */}
//             <button
//               type="button"
//               className="flex h-full w-[24px] items-center justify-center"
//               aria-label="Previous artwork"
//               onClick={onPrev}
//             >
//               <img
//                 src={imgArrowLeft}
//                 alt="Previous"
//                 className="block h-[32px] w-[32px]"
//               />
//             </button>

//             {/* Main artwork */}
//             <div className="relative h-[532.5px] w-[710px] overflow-hidden rounded-[4px]">
//               <div className="absolute inset-0 bg-[#d9d9d9]" />
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="absolute inset-0 h-full w-full object-cover "
//               />
//             </div>

//             {/* Right: text + right arrow */}
//             {/* <div className="flex h-[544px] w-[420px] flex-col"> */}
//           </div>

//           <div className="w-full lg:w-[30%] flex gap-[20px]  justify-center items-center h-full text-start">
//             <div>
//               <h1 className="mb-[10px] font-['Inter',sans-serif] text-[32px] font-semibold   text-[#191d17]">
//                 {item.title}
//               </h1>

//               <p className=" font-['Inter',sans-serif] text-[20px] leading-[25px] text-[#43483f] w-full break-word">
//                 {item.longDesc ??
//                   `Lorem ipsum dolor sit amet consectetur. Facilisis tortor tellus sed
//                 leo ornare venenatis tellus egestas. Neque adipiscing nullam ipsum
//                 fermentum malesuada volutpat amet rutrum. Turpis ac faucibus
//                 facilisis faucibus vitae urna. Massa molestie convallis mattis
//                 diam id pharetra. zsxdcfvgbhnjmkwerftgyhuji kzxcfvgbhnjmcvb njmvbnsxdc fvgbhnvbnm
//                 `}
//               </p>
//             </div>

//             <button
//               type="button"
//               className="flex h-full w-[24px] items-center justify-end "
//               aria-label="Next artwork"
//               onClick={onNext}
//             >
//               <img
//                 src={imgArrowRight}
//                 alt="Next"
//                 className="block h-[32px] w-[32px] "
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// components/GalleryModal.jsx
"use client";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

export default function GalleryModal({ item, onPrev, onNext, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-8  sm:p-12 xl:p-4">
      {/* Modal container */}
      <div className="relative w-full max-w-5xl bg-white rounded-md p-[30px] sm:p-[50px] xl:p-[80px] max-h-[95vh]">
        {/* Close icon */}
        <button
          className="absolute -top-7 -right-7  text-white text-[25px] sm:text-[30px]"
          onClick={onClose}
        >
          <IoMdCloseCircleOutline />
        </button>
        {/* Left Arrow */}
        <button
          type="button"
          className=" absolute left-2 top-1/2 -translate-y-1/2 "
          onClick={onPrev}
        >
          <p className="text-black text-[20px] sm:text-[30px]">
            <FaAngleLeft />
          </p>
        </button>
        {/* Right Arrow */}
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2"
          onClick={onNext}
        >
          <p className="text-black text-[20px] sm:text-[30px]">
            <FaAngleRight />
          </p>{" "}
        </button>
        {/* Content wrapper */}
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-7  justify-center">
          {/* Image + side arrows */}
          <div className=" w-full md:w-[70%] flex items-center justify-center">
            {/* Image box */}
            <div className="w-full max-w-[700px] h-[300px] sm:h-[380px] md:h-[520px] rounded-md overflow-hidden bg-gray-200"></div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-[30%] text-start flex">
            <div className=" text-start">
              <h1 className="mb-2 font-['Inter'] text-[24px] md:text-[30px] font-semibold text-[#191d17]">
                {item.title}
              </h1>

              <p className="text-[16px] md:text-[18px] leading-[22px] text-[#43483f] ">
                {item.longDesc ??
                  `Lorem ipsum dolor sit amet consectetur. Facilisis tortor tellus sed leo ornare venenatis tellus egestas. Neque adipiscing nullam ipsum fermentum malesuada. awsdfvgbhj dfgvhjb fyfjhkj dtddghgjhb dtrdyjghvhvhv ftdfyv ff jtfd gfgfh  gfgdg jfgf hjh  trdfhghjg  tdth jh vhfgcr hghhbj fdygjhb fhgn j`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

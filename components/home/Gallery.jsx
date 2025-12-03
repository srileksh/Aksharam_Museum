// import {
//   imgRectangle7,
//   imgRectangle8,
//   imgRectangle9,
//   imgRectangle10,
//   imgRectangle11,
//   imgRectangle12,
//   imgRectangle13,
// } from "@/lib/assets";

// export default function Gallery() {
//   return (
//     <div className="w-full ">
//       {/* TITLE */}
//       <div className="flex items-center justify-between my-8">
//         <p className="text-[24px] font-semibold text-[#43483f]">GALLERY</p>

//         <button className="border border-[#295020] rounded-[8px] px-4 py-2 text-[#295020]">
//           View all &gt;&gt;
//         </button>
//       </div>

//       {/* 📱 MOBILE / TABLET RESPONSIVE VERSION */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:hidden gap-6">
//         <ResponsiveCard img={imgRectangle7} />
//         <ResponsiveCard img={imgRectangle8} />
//         <ResponsiveCard img={imgRectangle9} />
//         <ResponsiveCard img={imgRectangle10} />
//         <ResponsiveCard img={imgRectangle11} />
//         <ResponsiveCard img={imgRectangle12} />
//         <ResponsiveCard img={imgRectangle13} />
//       </div>

//       {/* Outer wrapper: full width, centers content, prevents horizontal scroll */}
//       <div className="hidden xl:flex w-full justify-center">
//         <div className="w-full flex justify-center overflow-hidden">
//           <div
//             className="
//       relative
//       w-full max-w-[1292px]
//       h-[650px] md:h-[580px] sm:h-[480px]
//       transform origin-center
//       scale-100 lg:scale-95 md:scale-90 sm:scale-75
//     "
//           >
//             <GalleryABS
//               img={imgRectangle7}
//               className="left-[0px] top-[0px] w-[218px] h-[328px]"
//             />

//             <GalleryABS
//               img={imgRectangle8}
//               className="left-[244px] top-[72px] w-[259px] h-[256px]"
//             />

//             <GalleryABS
//               img={imgRectangle9}
//               className="left-[522px] top-[0px] w-[326px] h-[228px]"
//             />

//             <GalleryABS
//               img={imgRectangle10}
//               className="left-[876px] top-[6px] w-[416px] h-[306px]"
//             />

//             <GalleryABS
//               img={imgRectangle11}
//               className="left-[876px] top-[368px] w-[416px] h-[218px]"
//             />

//             <GalleryABS
//               img={imgRectangle12}
//               className="left-[522px] top-[256px] w-[326px] h-[378px]"
//             />

//             <GalleryABS
//               img={imgRectangle13}
//               className="left-[67px] top-[352px] w-[389px] h-[256px]"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ResponsiveCard({ img }) {
//   return (
//     <div className="w-full h-[260px] sm:h-[300px] rounded-[12px] overflow-hidden bg-[#d9d9d9]">
//       <img
//         src={img}
//         className="w-full h-full object-cover rounded-[12px]"
//         alt=""
//       />
//     </div>
//   );
// }

// function GalleryABS({ img, className }) {
//   return (
//     <div
//       className={`absolute rounded-[8px] overflow-hidden bg-[#d9d9d9] ${className}`}
//     >
//       <img
//         src={img}
//         alt=""
//         className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
//       />
//     </div>
//   );
// }




"use client";
import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

// Helper
function buildUrl(url) {
  if (!url) return "";
  return url.startsWith("http") ? url : `${API_BASE}${url}`;
}

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await apiGet("/api/public/gallery?page=1&limit=7");

        const arr = (Array.isArray(data) ? data : data.items) || [];

        const mapped = arr.map((g) => ({
          id: g._id,
          img: buildUrl(g.imageUrl),
        }));

        setItems(mapped);
      } catch (err) {
        console.error("Gallery load error", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <div className="w-full">
      {/* TITLE */}
      <div className="flex items-center justify-between my-8">
        <p className="text-[24px] font-semibold text-[#43483f]">GALLERY</p>

        <button className="border border-[#295020] rounded-[8px] px-4 py-2 text-[#295020]">
          View all &gt;&gt;
        </button>
      </div>

      {/* LOADING */}
      {loading && <p className="text-gray-500">Loading gallery…</p>}

      {/* 📱 MOBILE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:hidden gap-6">
        {items.map((i) => (
          <ResponsiveCard key={i.id} img={i.img} />
        ))}
      </div>

      {/* 💻 DESKTOP ABSOLUTE LAYOUT */}
      <div className="hidden xl:flex w-full justify-center mt-10">
        <div className="w-full flex justify-center overflow-hidden">
          <div
            className="
              relative
              w-full max-w-[1292px]
              h-[650px]
              transform origin-center scale-100
            "
          >
            {items[0] && (
              <GalleryABS
                img={items[0].img}
                className="left-[0px] top-[0px] w-[218px] h-[328px]"
              />
            )}

            {items[1] && (
              <GalleryABS
                img={items[1].img}
                className="left-[244px] top-[72px] w-[259px] h-[256px]"
              />
            )}

            {items[2] && (
              <GalleryABS
                img={items[2].img}
                className="left-[522px] top-[0px] w-[326px] h-[228px]"
              />
            )}

            {items[3] && (
              <GalleryABS
                img={items[3].img}
                className="left-[876px] top-[6px] w-[416px] h-[306px]"
              />
            )}

            {items[4] && (
              <GalleryABS
                img={items[4].img}
                className="left-[876px] top-[368px] w-[416px] h-[218px]"
              />
            )}

            {items[5] && (
              <GalleryABS
                img={items[5].img}
                className="left-[522px] top-[256px] w-[326px] h-[378px]"
              />
            )}

            {items[6] && (
              <GalleryABS
                img={items[6].img}
                className="left-[67px] top-[352px] w-[389px] h-[256px]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */
function ResponsiveCard({ img }) {
  return (
    <div className="w-full h-[260px] sm:h-[300px] rounded-[12px] overflow-hidden bg-[#d9d9d9]">
      <img src={img} className="w-full h-full object-cover" alt="" />
    </div>
  );
}

function GalleryABS({ img, className }) {
  return (
    <div
      className={`absolute rounded-[8px] overflow-hidden bg-[#d9d9d9] ${className}`}
    >
      <img
        src={img}
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
    </div>
  );
}

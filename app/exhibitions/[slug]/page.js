// // "use client";

// // import { useEffect, useState } from "react";
// // import { apiGet } from "../../../lib/api"; // relative to project root
// // import { useParams } from "next/navigation";
// // // --- LOCAL LOGO (same as other pages) ---
// // const imgAksharamLogo8X8Cm1 = "/logo.png";

// // // --- FIGMA ASSETS FOR THIS PAGE (fallbacks) ---
// // const imgRectangle23 =
// //     "https://www.figma.com/api/mcp/asset/efc5e5ca-652c-47e2-ad78-bd1605fd7790";

// // const imgUilFacebook =
// //     "https://www.figma.com/api/mcp/asset/cd60a726-9cb7-4570-8325-a053452ecf19";
// // const imgGroup =
// //     "https://www.figma.com/api/mcp/asset/c2c3924a-179a-42c1-aeca-6cfaa1e2b7bb";
// // const imgUilYoutube =
// //     "https://www.figma.com/api/mcp/asset/e458b08b-c6f6-4beb-8b53-15e151fc750d";
// // const imgIonTicket =
// //     "https://www.figma.com/api/mcp/asset/babcc219-3da5-41c8-9b09-41237ea42698";
// // const imgMaterialSymbolsLightMail =
// //     "https://www.figma.com/api/mcp/asset/a81e5b2d-7b6d-418a-aceb-abe1c1673102";
// // const imgEntypoOldPhone =
// //     "https://www.figma.com/api/mcp/asset/4c8903b9-3028-4c99-b28b-b1aaa94857eb";
// // const imgIcomoonFreeMobile =
// //     "https://www.figma.com/api/mcp/asset/baa88610-59a4-4597-8e39-e8be2b2ef12a";
// // const imgLine2 =
// //     "https://www.figma.com/api/mcp/asset/70cdcf5c-ebfa-4f41-a2bf-f7878d0a1c1d";

// // const CMS_API_BASE =
// //     process.env.NEXT_PUBLIC_CMS_API_BASE ||
// //     process.env.NEXT_PUBLIC_API_BASE_URL ||
// //     "http://localhost:5000";

// // // ----------------- helpers -----------------
// // function ConnectWithUs({ className, property1 = "Youtube" }) {
// //     if (property1 === "Facebook") {
// //         return (
// //             <div className={className}>
// //                 <div className="relative shrink-0 size-[24px]">
// //                     <img alt="" className="block size-full max-w-none" src={imgUilFacebook} />
// //                 </div>
// //                 <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
// //                     Facebook
// //                 </p>
// //             </div>
// //         );
// //     }

// //     if (property1 === "instagram") {
// //         return (
// //             <div className={className}>
// //                 <div className="overflow-clip relative shrink-0 size-[24px]">
// //                     <div className="absolute inset-[10.42%]">
// //                         <div className="absolute inset-[-3.95%]">
// //                             <img alt="" className="block size-full max-w-none" src={imgGroup} />
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
// //                     Instagram
// //                 </p>
// //             </div>
// //         );
// //     }

// //     if (property1 === "Pre-Publication") {
// //         return (
// //             <div className={className}>
// //                 <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
// //                     Pre-Publication
// //                 </p>
// //             </div>
// //         );
// //     }

// //     if (property1 === "Feedback") {
// //         return (
// //             <div className={className}>
// //                 <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
// //                     Feedback
// //                 </p>
// //             </div>
// //         );
// //     }

// //     if (property1 === "Bulletin") {
// //         return (
// //             <div className={className}>
// //                 <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
// //                     Bulletin
// //                 </p>
// //             </div>
// //         );
// //     }

// //     if (property1 === "Return & Refund Policy") {
// //         return (
// //             <div className={className}>
// //                 <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
// //                     Return &amp; Refund Policy
// //                 </p>
// //             </div>
// //         );
// //     }

// //     if (property1 === "Archives") {
// //         return (
// //             <div className={className}>
// //                 <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
// //                     Archives
// //                 </p>
// //             </div>
// //         );
// //     }

// //     if (property1 === "Privacy Policy") {
// //         return (
// //             <div className={className}>
// //                 <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
// //                     Privacy Policy
// //                 </p>
// //             </div>
// //         );
// //     }

// //     if (property1 === "Catalogue") {
// //         return (
// //             <div className={className}>
// //                 <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
// //                     Catalogue
// //                 </p>
// //             </div>
// //         );
// //     }

// //     if (property1 === "Terms & Conditions") {
// //         return (
// //             <div className={className}>
// //                 <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
// //                     Terms &amp; Conditions
// //                 </p>
// //             </div>
// //         );
// //     }

// //     // default: Youtube
// //     return (
// //         <div className={className}>
// //             <div className="relative shrink-0 size-[24px]">
// //                 <img alt="" className="block size-full max-w-none" src={imgUilYoutube} />
// //             </div>
// //             <p className="font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-[#7e7577]">
// //                 Youtube
// //             </p>
// //         </div>
// //     );
// // }

// // function formatDateRange(startDate, endDate) {
// //     if (!startDate && !endDate) return "";

// //     const fmt = (iso) =>
// //         new Date(iso).toLocaleDateString("en-IN", {
// //             day: "2-digit",
// //             month: "short",
// //             year: "numeric",
// //         });

// //     if (startDate && endDate) {
// //         const s = new Date(startDate);
// //         const e = new Date(endDate);

// //         const sameDay =
// //             s.getFullYear() === e.getFullYear() &&
// //             s.getMonth() === e.getMonth() &&
// //             s.getDate() === e.getDate();

// //         if (sameDay) return fmt(startDate);
// //         return `${fmt(startDate)} – ${fmt(endDate)}`;
// //     }

// //     if (startDate) return fmt(startDate);
// //     if (endDate) return fmt(endDate);
// //     return "";
// // }

// // function statusLabel(status) {
// //     if (!status) return "In Progress";
// //     if (status === "upcoming") return "Upcoming";
// //     if (status === "past" || status === "completed") return "Completed";
// //     return "In Progress";
// // }

// // // --------------- PAGE ---------------
// // export default function ExhibitionDetailsPage() {
// //     const params = useParams();                          // ⬅️ get params in client
// //     const slug = Array.isArray(params.slug)
// //         ? params.slug[0]
// //         : params.slug;                                     // `[slug]` -> string

// //     const [exhibition, setExhibition] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState("");

// //     useEffect(() => {
// //         let cancelled = false;

// //         async function load() {
// //             try {
// //                 setLoading(true);
// //                 setError("");
// //                 const data = await apiGet(
// //                     `/api/public/exhibitions/${encodeURIComponent(slug)}`
// //                 );
// //                 if (!cancelled) setExhibition(data);
// //             } catch (err) {
// //                 console.error("Failed to load exhibition:", err);
// //                 if (!cancelled) setError("Failed to load exhibition.");
// //             } finally {
// //                 if (!cancelled) setLoading(false);
// //             }
// //         }

// //         if (slug) load();
// //         return () => {
// //             cancelled = true;
// //         };
// //     }, [slug]);

// //     // computed values
// //     const title = exhibition?.title || "Exhibition";
// //     const dateLabel = formatDateRange(exhibition?.startDate, exhibition?.endDate);
// //     const statusText = statusLabel(exhibition?.status);
// //     const heroImage =
// //         exhibition?.bannerImage
// //             ? exhibition.bannerImage.startsWith("http")
// //                 ? exhibition.bannerImage
// //                 : `${CMS_API_BASE}${exhibition.bannerImage}`
// //             : imgRectangle23;
// //     const bodyText =
// //         exhibition?.longDescription || exhibition?.description || "";

// //     return (
// //         <div className="flex justify-center bg-[#f8fbf1]">
// //             {/* 1440px Figma canvas */}
// //             <div className="relative w-[1440px] min-h-[2100px] bg-white overflow-x-hidden">
// //                 {/* HEADER */}
                  

// //                 {/* FOOTER */}
// //                 <div className="absolute left-0 top-[1992px] flex w-[1440px] flex-col items-center justify-center gap-[40px] bg-gradient-to-b from-[#0f0c0d] to-[rgba(15,12,13,0.75)] px-[72px] py-[72px]">
// //                     <div className="relative h-[344px] w-[1296px]">
// //                         {/* About */}
// //                         <div className="absolute left-0 top-0 flex w-[305px] flex-col items-start gap-[16px] leading-6 text-white whitespace-pre-wrap">
// //                             <p className="w-full font-['Inter',sans-serif] text-[24px] font-semibold tracking-[0.036px]">
// //                                 About us
// //                             </p>
// //                             <p className="w-full font-['Inter',sans-serif] text-[14px] tracking-[0.021px]">
// //                                 It can be said that more than 75% of the best works produced in Malayalam
// //                                 literature during the last 79 years were published by SPCS.
// //                             </p>
// //                         </div>

// //                         {/* Connect with us (social) */}
// //                         <div className="absolute left-[426px] top-0 flex w-[222px] flex-col items-start gap-[16px] px-[8px]">
// //                             <p className="min-w-full w-min font-['Inter',sans-serif] text-[24px] font-semibold leading-6 tracking-[0.036px] text-white whitespace-pre-wrap">
// //                                 Connect with us
// //                             </p>
// //                             <ConnectWithUs className="relative flex items-center gap-[8px]" />
// //                             <ConnectWithUs
// //                                 className="relative flex items-center gap-[8px]"
// //                                 property1="Facebook"
// //                             />
// //                             <ConnectWithUs
// //                                 className="relative flex items-center gap-[8px]"
// //                                 property1="instagram"
// //                             />
// //                         </div>

// //                         {/* Explore / links */}
// //                         <div className="absolute left-[769px] top-0 flex w-[222px] flex-col items-start gap-[16px] px-[8px]">
// //                             <p className="min-w-full w-min font-['Inter',sans-serif] text-[24px] font-semibold leading-6 tracking-[0.036px] text-white whitespace-pre-wrap">
// //                                 Connect with us
// //                             </p>
// //                             <ConnectWithUs
// //                                 className="relative flex items-center gap-[8px]"
// //                                 property1="Pre-Publication"
// //                             />
// //                             <ConnectWithUs
// //                                 className="relative flex items-center gap-[8px]"
// //                                 property1="Archives"
// //                             />
// //                             <ConnectWithUs
// //                                 className="relative flex items-center gap-[8px]"
// //                                 property1="Bulletin"
// //                             />
// //                             <ConnectWithUs
// //                                 className="relative flex items-center gap-[8px]"
// //                                 property1="Catalogue"
// //                             />
// //                             <ConnectWithUs
// //                                 className="relative flex items-center gap-[8px]"
// //                                 property1="Feedback"
// //                             />
// //                             <ConnectWithUs
// //                                 className="relative flex items-center gap-[8px]"
// //                                 property1="Return & Refund Policy"
// //                             />
// //                             <ConnectWithUs
// //                                 className="relative flex items-center gap-[8px]"
// //                                 property1="Privacy Policy"
// //                             />
// //                             <ConnectWithUs
// //                                 className="relative flex items-center gap-[8px]"
// //                                 property1="Terms & Conditions"
// //                             />
// //                         </div>

// //                         {/* Contact */}
// //                         <div className="absolute left-[1112px] top-0 flex w-[184px] flex-col items-start gap-[16px] px-[8px]">
// //                             <p className="min-w-full w-min font-['Inter',sans-serif] text-[24px] font-semibold leading-6 tracking-[0.036px] text-white whitespace-pre-wrap">
// //                                 Contact us
// //                             </p>
// //                             <div className="min-w-full w-min font-['Inter',sans-serif] text-[14px] leading-6 tracking-[0.021px] text-white whitespace-pre-wrap">
// //                                 <p className="mb-0 font-extrabold">SPCS</p>
// //                                 <p className="mb-0">Kottayam, Head Office ,</p>
// //                                 <p>Kottayam - 686001.</p>
// //                             </div>
// //                             <div className="relative flex items-center gap-[8px]">
// //                                 <div className="relative shrink-0 size-[24px]">
// //                                     <img
// //                                         alt=""
// //                                         className="block size-full max-w-none"
// //                                         src={imgMaterialSymbolsLightMail}
// //                                     />
// //                                 </div>
// //                                 <p className="font-['Inter',sans-serif] text-[14px] font-medium leading-6 tracking-[0.021px] text-white">
// //                                     spcsktm@gmail.com
// //                                 </p>
// //                             </div>
// //                             <div className="relative flex items-start gap-[16px]">
// //                                 <div className="relative shrink-0 size-[24px]">
// //                                     <img
// //                                         alt=""
// //                                         className="block size-full max-w-none"
// //                                         src={imgEntypoOldPhone}
// //                                     />
// //                                 </div>
// //                                 <div className="flex w-[102px] flex-col items-start gap-[8px] font-['Inter',sans-serif] text-[14px] font-medium leading-6 tracking-[0.021px] text-white whitespace-pre-wrap">
// //                                     <p>0481- 2301812</p>
// //                                     <p>0481- 2564111</p>
// //                                 </div>
// //                             </div>
// //                             <div className="relative flex items-center gap-[16px]">
// //                                 <div className="relative shrink-0 size-[24px]">
// //                                     <img
// //                                         alt=""
// //                                         className="block size-full max-w-none"
// //                                         src={imgIcomoonFreeMobile}
// //                                     />
// //                                 </div>
// //                                 <p className="font-['Inter',sans-serif] text-[14px] font-medium leading-6 tracking-[0.021px] text-white">
// //                                     +919048397101
// //                                 </p>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     <p className="font-['Inter',sans-serif] text-[14px] font-medium leading-6 tracking-[0.021px] text-white">
// //                         © 2025 aksharam.com, All rights reserved
// //                     </p>
// //                 </div>

// //                 {/* BREADCRUMB */}
// //                 <div className="absolute left-[72px] top-[192px] flex items-center gap-[8px] text-[16px]">
// //                     <a className="cursor-pointer font-['Inter',sans-serif] text-[16px] font-semibold text-[#295fa7]">
// //                         EXHIBITIONS &amp; EVENTS
// //                     </a>
// //                     <p className="font-['Inter',sans-serif] text-[16px] text-[#295fa7]">
// //                         {">"}
// //                     </p>
// //                     <p className="font-['Inter',sans-serif] text-[16px] text-[#191d17]">
// //                         {title}
// //                     </p>
// //                 </div>

// //                 {/* HERO IMAGE */}
// //                 <div className="absolute left-0 top-[251px] h-[581px] w-[1440px] rounded-[8px]">
// //                     <div className="pointer-events-none absolute inset-0 rounded-[8px]">
// //                         <div className="absolute inset-0 rounded-[8px] bg-[#d9d9d9]" />
// //                         <img
// //                             alt="Exhibition hero"
// //                             src={heroImage}
// //                             className="absolute inset-0 size-full max-w-none rounded-[8px] object-cover"
// //                         />
// //                         <div className="absolute inset-0 rounded-[8px]" />
// //                     </div>
// //                 </div>

// //                 {/* HERO OVERLAY TEXT */}
// //                 <div className="absolute left-[72px] top-[656px] flex w-[371px] flex-col items-start gap-[24px]">
// //                     <div className="flex items-center justify-center gap-[10px] rounded-[16px] border border-[#a5d395] bg-[#a5d395] px-[16px] py-[8px]">
// //                         <p className="font-['Inter',sans-serif] text-[20px] text-white">
// //                             {statusText}
// //                         </p>
// //                     </div>
// //                     <div className="flex w-full flex-col items-start gap-[24px] text-white whitespace-pre-wrap">
// //                         <p className="w-full font-['Inter',sans-serif] text-[32px] font-semibold">
// //                             {title}
// //                         </p>

// //                     </div>
// //                 </div>

// //                 {/* TITLE + DATE BELOW HERO */}
// //                 <div className="absolute left-[72px] top-[872px] flex flex-col items-start gap-[24px]">
// //                     <p className="w-min font-['Inter',sans-serif] text-[32px] font-semibold text-[#43483f] whitespace-pre-wrap">
// //                         {title}
// //                     </p>
// //                     {dateLabel && (
// //                         <p className="font-['Inter',sans-serif] text-[20px] text-[#191d17]">
// //                             {dateLabel}
// //                         </p>
// //                     )}
// //                 </div>

// //                 {/* BODY TEXT */}
// //                 <div className="absolute left-[72px] top-[1024px] h-[816px] w-[770px] font-['Inter',sans-serif] text-[20px] text-[#73796e] whitespace-pre-wrap">
// //                     {loading && <p>Loading exhibition details…</p>}
// //                     {!loading && error && <p className="text-red-500">{error}</p>}
// //                     {!loading && !error && bodyText && <p>{bodyText}</p>}
// //                 </div>

// //                 {/* RIGHT SIDEBAR CARD (DATES + HOURS) */}
// //                 <div className="absolute left-[calc(66.67%_-_30px)] top-[872px] flex w-[424px] flex-col items-center gap-[24px] rounded-[8px] bg-white px-[32px] py-[16px] shadow-[2px_-4px_10px_0px_rgba(0,0,0,0.04),17px_14px_9px_0px_rgba(0,0,0,0.01),10px_8px_7px_0px_rgba(0,0,0,0.05),4px_3px_6px_0px_rgba(0,0,0,0.09),1px_1px_3px_0px_rgba(0,0,0,0.1)]">
// //                     {dateLabel && (
// //                         <p className="font-['Inter',sans-serif] text-[20px] font-medium text-[#191d17]">
// //                             {dateLabel}
// //                         </p>
// //                     )}

// //                     {/* Book button + divider */}
// //                     <div className="relative flex w-[360px] flex-col items-center gap-[16px]">
// //                         <div className="flex items-center justify-center gap-[10px] rounded-[16px] bg-[#ef3e3e] px-[16px] py-[12px]">
// //                             <div className="relative shrink-0 size-[24px]">
// //                                 <img alt="" className="block size-full max-w-none" src={imgIonTicket} />
// //                             </div>
// //                             <p className="font-['Inter',sans-serif] text-[14px] font-medium text-white">
// //                                 BOOK TICKETS
// //                             </p>
// //                         </div>
// //                         <div className="relative h-0 w-full">
// //                             <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
// //                                 <img alt="" className="block size-full max-w-none" src={imgLine2} />
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* Opening hours */}
// //                     <div className="flex w-[320px] flex-col items-start gap-[41px]">
// //                         {[
// //                             "Sunday",
// //                             "Monday",
// //                             "Tuesday",
// //                             "Wednesday",
// //                             "Thursday",
// //                             "Friday",
// //                             "Saturday",
// //                         ].map((day) => (
// //                             <div
// //                                 key={day}
// //                                 className="flex w-full items-center gap-[16px] font-['Inter',sans-serif] text-[20px] text-[#191d17] whitespace-pre-wrap"
// //                             >
// //                                 <p className="w-[115px]">{day}</p>
// //                                 <p className="w-[189px]">10:00 AM - 6:00 PM</p>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }


// "use client";

// import { useEffect, useState } from "react";
// import { apiGet } from "../../../lib/api";
// import { useParams } from "next/navigation";

// // Assets
// const imgAksharamLogo8X8Cm1 = "/logo.png";
// const imgRectangle23 =
//     "https://www.figma.com/api/mcp/asset/efc5e5ca-652c-47e2-ad78-bd1605fd7790";

// const imgUilFacebook =
//     "https://www.figma.com/api/mcp/asset/cd60a726-9cb7-4570-8325-a053452ecf19";
// const imgGroup =
//     "https://www.figma.com/api/mcp/asset/c2c3924a-179a-42c1-aeca-6cfaa1e2b7bb";
// const imgUilYoutube =
//     "https://www.figma.com/api/mcp/asset/e458b08b-c6f6-4beb-8b53-15e151fc750d";
// const imgIonTicket =
//     "https://www.figma.com/api/mcp/asset/babcc219-3da5-41c8-9b09-41237ea42698";
// const imgMaterialSymbolsLightMail =
//     "https://www.figma.com/api/mcp/asset/a81e5b2d-7b6d-418a-aceb-abe1c1673102";
// const imgEntypoOldPhone =
//     "https://www.figma.com/api/mcp/asset/4c8903b9-3028-4c99-b28b-b1aaa94857eb";
// const imgIcomoonFreeMobile =
//     "https://www.figma.com/api/mcp/asset/baa88610-59a4-4597-8e39-e8be2b2ef12a";
// const imgLine2 =
//     "https://www.figma.com/api/mcp/asset/70cdcf5c-ebfa-4f41-a2bf-f7878d0a1c1d";

// const CMS_API_BASE =
//     process.env.NEXT_PUBLIC_CMS_API_BASE ||
//     process.env.NEXT_PUBLIC_API_BASE_URL ||
//     "http://localhost:5000";

// // ----------------- helpers -----------------
// function ConnectWithUs({ className, property1 = "Youtube" }) {
//     if (property1 === "Facebook") {
//         return (
//             <div className={className}>
//                 <div className="relative shrink-0 size-[24px]">
//                     <img alt="" className="block size-full max-w-none" src={imgUilFacebook} />
//                 </div>
//                 <p className="font-['Inter',sans-serif] text-[14px] leading-6 text-[#7e7577]">
//                     Facebook
//                 </p>
//             </div>
//         );
//     }

//     if (property1 === "instagram") {
//         return (
//             <div className={className}>
//                 <div className="overflow-clip relative shrink-0 size-[24px]">
//                     <div className="absolute inset-[10.42%]">
//                         <div className="absolute inset-[-3.95%]">
//                             <img alt="" className="block size-full max-w-none" src={imgGroup} />
//                         </div>
//                     </div>
//                 </div>
//                 <p className="font-['Inter',sans-serif] text-[14px] leading-6 text-[#7e7577]">
//                     Instagram
//                 </p>
//             </div>
//         );
//     }

//     return (
//         <div className={className}>
//             <div className="relative shrink-0 size-[24px]">
//                 <img alt="" className="block size-full max-w-none" src={imgUilYoutube} />
//             </div>
//             <p className="font-['Inter',sans-serif] text-[14px] leading-6 text-[#7e7577]">
//                 Youtube
//             </p>
//         </div>
//     );
// }

// function formatDateRange(startDate, endDate) {
//     if (!startDate && !endDate) return "";

//     const fmt = (iso) =>
//         new Date(iso).toLocaleDateString("en-IN", {
//             day: "2-digit",
//             month: "short",
//             year: "numeric",
//         });

//     if (startDate && endDate) {
//         const s = new Date(startDate);
//         const e = new Date(endDate);

//         const sameDay =
//             s.getFullYear() === e.getFullYear() &&
//             s.getMonth() === e.getMonth() &&
//             s.getDate() === e.getDate();

//         if (sameDay) return fmt(startDate);
//         return `${fmt(startDate)} – ${fmt(endDate)}`;
//     }

//     if (startDate) return fmt(startDate);
//     if (endDate) return fmt(endDate);
//     return "";
// }

// function statusLabel(status) {
//     if (!status) return "In Progress";
//     if (status === "upcoming") return "Upcoming";
//     if (status === "past" || status === "completed") return "Completed";
//     return "In Progress";
// }

// // --------------- PAGE ---------------
// export default function ExhibitionDetailsPage() {
//     const params = useParams();
//     const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

//     const [exhibition, setExhibition] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         let cancelled = false;

//         async function load() {
//             try {
//                 setLoading(true);
//                 setError("");
//                 const data = await apiGet(
//                     `/api/public/exhibitions/${encodeURIComponent(slug)}`
//                 );
//                 if (!cancelled) setExhibition(data);
//             } catch (err) {
//                 console.error("Failed:", err);
//                 if (!cancelled) setError("Failed to load exhibition.");
//             } finally {
//                 if (!cancelled) setLoading(false);
//             }
//         }

//         if (slug) load();
//         return () => {
//             cancelled = true;
//         };
//     }, [slug]);

//     const title = exhibition?.title || "Exhibition";
//     const dateLabel = formatDateRange(exhibition?.startDate, exhibition?.endDate);
//     const statusText = statusLabel(exhibition?.status);
//     const heroImage =
//         exhibition?.bannerImage
//             ? exhibition.bannerImage.startsWith("http")
//                 ? exhibition.bannerImage
//                 : `${CMS_API_BASE}${exhibition.bannerImage}`
//             : imgRectangle23;

//     const bodyText = exhibition?.longDescription || exhibition?.description || "";

//     return (
//         <div className="flex justify-center bg-[#f8fbf1]">
//             <div className=" bg-white overflow-x-hidden">

//                 {/* BREADCRUMB */}
//                 <div className="absolute left-[72px] top-[192px] flex items-center gap-[8px] text-[16px]">
//                     <a className="cursor-pointer font-['Inter',sans-serif] text-[16px] font-semibold text-[#295fa7]">
//                         EXHIBITIONS &amp; EVENTS
//                     </a>
//                     <p className="font-['Inter',sans-serif] text-[16px] text-[#295fa7]">{">"}</p>
//                     <p className="font-['Inter',sans-serif] text-[16px] text-[#191d17]">{title}</p>
//                 </div>

//                 {/* HERO IMAGE */}
//                 <div className="absolute left-0 top-[251px] h-[581px] w-[1440px] rounded-[8px]">
//                     <div className="absolute inset-0 rounded-[8px] bg-[#d9d9d9]" />
//                     <img
//                         alt="Exhibition hero"
//                         src={heroImage}
//                         className="absolute inset-0 size-full rounded-[8px] object-cover"
//                     />
//                 </div>

//                 {/* HERO OVERLAY */}
//                 <div className="absolute left-[72px] top-[656px] flex w-[371px] flex-col gap-[24px]">
//                     <div className="flex items-center justify-center gap-[10px] rounded-[16px] bg-[#a5d395] px-[16px] py-[8px]">
//                         <p className="font-['Inter',sans-serif] text-[20px] text-white">{statusText}</p>
//                     </div>
//                     <p className="text-white font-['Inter',sans-serif] text-[32px] font-semibold">{title}</p>
//                 </div>

//                 {/* TITLE + DATE */}
//                 <div className="absolute left-[72px] top-[872px] flex flex-col gap-[24px]">
//                     <p className="text-[32px] font-semibold text-[#43483f]">{title}</p>
//                     {dateLabel && (
//                         <p className="text-[20px] text-[#191d17]">{dateLabel}</p>
//                     )}
//                 </div>

//                 {/* BODY TEXT */}
//                 <div className="absolute left-[72px] top-[1024px] h-[816px] w-[770px] text-[20px] text-[#73796e]">
//                     {loading && <p>Loading exhibition details…</p>}
//                     {!loading && error && <p className="text-red-500">{error}</p>}
//                     {!loading && !error && bodyText && <p>{bodyText}</p>}
//                 </div>

//                 {/* SIDEBAR */}
//                 <div className="absolute left-[calc(66.67%_-_30px)] top-[872px] flex w-[424px] flex-col items-center gap-[24px] rounded-[8px] bg-white px-[32px] py-[16px] shadow">
//                     {dateLabel && (
//                         <p className="text-[20px] font-medium text-[#191d17]">
//                             {dateLabel}
//                         </p>
//                     )}

//                     {/* Book tickets */}
//                     <div className="flex flex-col items-center gap-[16px] w-[360px]">
//                         <div className="flex items-center gap-[10px] bg-[#ef3e3e] rounded-[16px] px-[16px] py-[12px]">
//                             <img src={imgIonTicket} className="size-[24px]" />
//                             <p className="text-[14px] text-white font-medium">BOOK TICKETS</p>
//                         </div>
//                         <img src={imgLine2} className="w-full" />
//                     </div>

//                     {/* Opening hours */}
//                     <div className="flex flex-col gap-[41px] w-[320px]">
//                         {[
//                             "Sunday",
//                             "Monday",
//                             "Tuesday",
//                             "Wednesday",
//                             "Thursday",
//                             "Friday",
//                             "Saturday",
//                         ].map((day) => (
//                             <div key={day} className="flex gap-[16px] text-[20px] text-[#191d17]">
//                                 <p className="w-[115px]">{day}</p>
//                                 <p className="w-[189px]">10:00 AM - 6:00 PM</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }


"use client";

import { useEffect, useState } from "react";
import { apiGet } from "../../../lib/api";
import { useParams } from "next/navigation";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

// Assets
const imgRectangle23 =
  "https://www.figma.com/api/mcp/asset/efc5e5ca-652c-47e2-ad78-bd1605fd7790";
const imgIonTicket =
  "https://www.figma.com/api/mcp/asset/babcc219-3da5-41c8-9b09-41237ea42698";
const imgLine2 =
  "https://www.figma.com/api/mcp/asset/70cdcf5c-ebfa-4f41-a2bf-f7878d0a1c1d";

const CMS_API_BASE =
  process.env.NEXT_PUBLIC_CMS_API_BASE ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "http://localhost:5000";

function formatDateRange(startDate, endDate) {
  if (!startDate && !endDate) return "";

  const fmt = (iso) =>
    new Date(iso).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  if (startDate && endDate) {
    const s = new Date(startDate);
    const e = new Date(endDate);

    const sameDay =
      s.getFullYear() === e.getFullYear() &&
      s.getMonth() === e.getMonth() &&
      s.getDate() === e.getDate();

    if (sameDay) return fmt(startDate);
    return `${fmt(startDate)} – ${fmt(endDate)}`;
  }

  return startDate ? fmt(startDate) : fmt(endDate);
}

function statusLabel(status) {
  if (!status) return "In Progress";
  if (status === "upcoming") return "Upcoming";
  if (status === "past" || status === "completed") return "Completed";
  return "In Progress";
}

export default function ExhibitionDetailsPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const [exhibition, setExhibition] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError("");
        const data = await apiGet(
          `/api/public/exhibitions/${encodeURIComponent(slug)}`
        );
        if (!cancelled) setExhibition(data);
      } catch (err) {
        console.error("Failed:", err);
        if (!cancelled) setError("Failed to load exhibition.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (slug) load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const title = exhibition?.title || "Exhibition";
  const dateLabel = formatDateRange(exhibition?.startDate, exhibition?.endDate);
  const statusText = statusLabel(exhibition?.status);

  const heroImage =
    exhibition?.bannerImage
      ? exhibition.bannerImage.startsWith("http")
        ? exhibition.bannerImage
        : `${CMS_API_BASE}${exhibition.bannerImage}`
      : imgRectangle23;

  const bodyText = exhibition?.longDescription || exhibition?.description || "";

  return (
    <>
    <Navbar/>
    <div className="flex justify-center bg-[#f8fbf1] py-10 mt-20 lg:mt-32">
      <div className="w-full max-w-[1440px] bg-white px-6 md:px-10">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-[16px] mb-6">
          <a className="text-[#295fa7] font-semibold cursor-pointer">
            EXHIBITIONS & EVENTS
          </a>
          <span className="text-[#295fa7]">{">"}</span>
          <span className="text-[#191d17]">{title}</span>
        </div>

        {/* HERO WRAPPER */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            alt="Exhibition Hero"
            src={heroImage}
            className="w-full h-[400px] md:h-[500px] object-cover"
          />

          {/* Status Badge — bottom-left */}
          <div className="absolute bottom-4 left-4 ">
            <span className="text-white text-[18px] font-medium bg-[#a5d395] rounded-xl px-4 py-2">{statusText}</span>
            <div className="">
          <p className="text-[32px] font-semibold text-[#ffffff]">{title}</p>
          {dateLabel && (
            <p className="text-[20px] text-[#ffffff] mt-2">{dateLabel}</p>
          )}
        </div>
          </div>
        </div>

        {/* Title + Date */}
       

        {/* MAIN GRID */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 ">

          {/* LEFT CONTENT */}
          <div className="text-[20px] text-[#73796e] leading-8">
             <div className="sm:mt-8">
          <p className="text-[32px] font-semibold text-[#43483f]">{title}</p>
          {dateLabel && (
            <p className="text-[20px] text-[#191d17] mt-2">{dateLabel}</p>
          )}
        </div>
            {loading && <p>Loading exhibition details…</p>}
            {!loading && error && <p className="text-red-500">{error}</p>}
            {!loading && !error && bodyText && <p>{bodyText}</p>}
          </div>

          {/* SIDEBAR */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-2xl p-6 flex flex-col gap-6">

            {/* Date */}
            {dateLabel && (
              <p className="text-[20px] font-medium text-[#191d17] text-center">
                {dateLabel}
              </p>
            )}

            {/* TICKETS */}
            <div className="flex flex-col items-center gap-4 ">
                <div className="border-b-1 border-[#C3C8BC] pb-4 w-full flex justify-center items-center px-6">
              <button className="flex items-center gap-2 bg-[#ef3e3e] px-4 py-2 rounded-lg text-white font-medium">
                <img src={imgIonTicket} className="w-6 h-6" />
                BOOK TICKETS
              </button>
</div>
            </div>

            {/* Opening Hours */}
            <div className="flex flex-col gap-4 text-[18px] text-[#191d17]">
              {[
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ].map((day) => (
                <div
                  key={day}
                  className="flex justify-between pb-2"
                >
                  <p>{day}</p>
                  <p>10:00 AM - 6:00 PM</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

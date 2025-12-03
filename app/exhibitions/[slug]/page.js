


"use client";

import { useEffect, useState } from "react";
import { apiGet } from "../../../lib/api";
import { useParams } from "next/navigation";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { IoTicketSharp } from "react-icons/io5";


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
    <div className="flex justify-center bg-[#f8fbf1] py-10 pt-24 lg:pt-36">
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
               <IoTicketSharp/> 
                BOOK TICKETS

              </button>
</div>
            </div>

            {/* Opening Hours */}
            <div className="flex flex-col gap-4 text-[18px] text-[#191d17]">
              {[
                "Sunday",
                // "Monday",
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

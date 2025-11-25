// app/exhibitions/page.js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiGet } from "@/lib/api";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

// --- LOCAL ASSETS ---
const imgAksharamLogo8X8Cm1 =
  "/assets/c9bd836db561a620218743a3d6eadfab75b83cec.png";

// Fallback placeholders if an exhibition has no image/date
const FALLBACK_IMAGE_LEFT =
  "/assets/bdb755f62c915a8dccff0af5a61ffcb1ba904244.png";
const FALLBACK_IMAGE_RIGHT =
  "/assets/67083be49282f47372d5eb7c4d90d2a8450176d8.png";

// Build image URL from /uploads path
const FILE_BASE =
  process.env.NEXT_PUBLIC_CMS_FILE_BASE ||
  // strip /api/public if using same origin
  (process.env.NEXT_PUBLIC_CMS_API_BASE
    ? process.env.NEXT_PUBLIC_CMS_API_BASE.replace(/\/api\/public$/, "")
    : "http://localhost:5000");

function buildImageUrl(path, index = 0) {
  if (!path) {
    // alternate between the two static images as a fallback
    return index % 2 === 0 ? FALLBACK_IMAGE_LEFT : FALLBACK_IMAGE_RIGHT;
  }
  if (path.startsWith("http")) return path;
  if (path.startsWith("/")) return `${FILE_BASE}${path}`;
  return `${FILE_BASE}/${path}`;
}

function formatDate(dateString) {
  if (!dateString) return "";
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}




// ───────── CARD ─────────

function ExhibitionCard({ exhibition, index }) {
  const href = `/exhibitions/${exhibition._id}`;
  const imgSrc = buildImageUrl(exhibition.bannerImage, index);

  const start = formatDate(exhibition.startDate);
  const end = formatDate(exhibition.endDate);
  const dateRange =
    start && end ? `${start} – ${end}` : start || end || "Date to be announced";

  const statusBadge =
    exhibition.status === "upcoming"
      ? "Upcoming"
      : exhibition.status === "past"
        ? "Closed"
        : "In Progress";

  return (
    <Link href={href} className="flex flex-col group cursor-pointer">
      {/* image container */}
      <div className="relative w-full overflow-hidden rounded-[4px]">
        <img
          src={imgSrc}
          alt={exhibition.title || "Exhibition"}
          className="block w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ aspectRatio: "4 / 3" }}
        />

        {/* Badge at bottom-left */}
        <div className="absolute left-4 bottom-4">
          <span className="inline-flex items-center rounded-full bg-[#A6D785] px-3 py-[4px] text-[11px] leading-[14px] font-semibold text-[#1a331d]">
            {statusBadge}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-5">
        {/* Meta text */}
        <div className="mb-2 text-[12px] leading-[18px] text-[#666666]">
          <p>Exhibition at the museum</p>
          <p>{dateRange}</p>
        </div>

        {/* Title */}
        <h2 className="font-serif text-[20px] leading-[26px] font-medium text-[#111111]">
          {exhibition.title || "Exhibition"}
        </h2>

        {/* Arrow */}
        <div className="mt-3 text-[#888888] transition-colors group-hover:text-[#111111]">
          <svg
            width="40"
            height="12"
            viewBox="0 0 40 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// ───────── PAGE ─────────

export default function ExhibitionsPage() {
  const [exhibitions, setExhibitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError("");

        // NOTE: this hits GET /api/public/exhibitions on your Express app
        const data = await apiGet("/api/public/exhibitions?page=1&limit=12");
        setExhibitions(Array.isArray(data.items) ? data.items : []);
      } catch (err) {
        console.error("Failed to load exhibitions:", err);
        setError("Failed to load exhibitions.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-[1150px] px-8 pt-12 pb-24">
        {/* Page title */}
        <header className="mb-10">
          <h1 className="font-serif text-[14px] leading-[18px] font-semibold tracking-[0.15em] uppercase text-[#222222]">
            Exhibitions &amp; Events
          </h1>
        </header>

        {/* States */}
        {loading && (
          <p className="text-[12px] leading-[18px] text-[#666666]">
            Loading exhibitions...
          </p>
        )}

        {!loading && error && (
          <p className="text-[12px] leading-[18px] text-[#E14242]">
            {error}
          </p>
        )}

        {!loading && !error && exhibitions.length === 0 && (
          <p className="text-[12px] leading-[18px] text-[#666666]">
            No exhibitions available at the moment.
          </p>
        )}

        {!loading && !error && exhibitions.length > 0 && (
          <section className="grid grid-cols-1 gap-y-20 gap-x-12 md:grid-cols-2">
            {exhibitions.map((ex, index) => (
              <ExhibitionCard key={ex._id || index} exhibition={ex} index={index} />
            ))}
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
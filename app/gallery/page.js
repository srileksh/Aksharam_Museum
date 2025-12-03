// app/gallery/page.jsx
"use client";

import { useState, useEffect } from "react";
import GalleryModal from "@/components/GalleryModal";
import { apiGet } from "@/lib/api";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL;

// Helper to build full image URL
function buildImageUrl(url) {
  if (!url) return "";
  return url.startsWith("http") ? url : `${API_BASE}${url}`;
}

export default function GalleryPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  // Fetch grid items
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        const data = await apiGet("/api/public/gallery?page=1&limit=18");
        const raw = Array.isArray(data) ? data : data.items || [];

        const mapped = raw.map((g) => ({
          id: g._id,
          title: g.title || "Untitled",
          desc: g.description || "",
          category: g.category || "Image",
          thumb: buildImageUrl(g.imageUrl),
        }));

        if (!cancelled) setItems(mapped);
      } catch (err) {
        console.error("Failed to load gallery:", err);
        if (!cancelled) setError("Failed to load gallery.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => (cancelled = true);
  }, []);

  // Load modal detail
  const loadDetailByIndex = async (index) => {
    if (index == null || index < 0 || index >= items.length) return;
    const baseItem = items[index];

    try {
      setModalLoading(true);
      const detail = await apiGet(
        `/api/public/gallery/${encodeURIComponent(baseItem.id)}`
      );

      setSelectedItem({
        id: detail._id,
        title: detail.title || baseItem.title,
        desc: detail.description || baseItem.desc,
        category: detail.category || baseItem.category,
        img: buildImageUrl(detail.imageUrl),
        largeImg: buildImageUrl(detail.imageUrl),
      });

      setSelectedIndex(index);
    } catch (err) {
      console.error("Failed to load gallery item detail:", err);
      setSelectedItem({
        ...baseItem,
        img: baseItem.thumb,
        largeImg: baseItem.thumb,
      });
      setSelectedIndex(index);
    } finally {
      setModalLoading(false);
    }
  };

  const openModal = (index) => loadDetailByIndex(index);
  const closeModal = () => {
    setSelectedIndex(null);
    setSelectedItem(null);
  };

  const showPrev = () => {
    if (selectedIndex == null) return;
    const nextIndex = (selectedIndex + items.length - 1) % items.length;
    loadDetailByIndex(nextIndex);
  };

  const showNext = () => {
    if (selectedIndex == null) return;
    const nextIndex = (selectedIndex + 1) % items.length;
    loadDetailByIndex(nextIndex);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-[#f8fbf1] sm:mt-10">
        <div className=" min-h-screen bg-white overflow-x-hidden">
          {/* MAIN CONTENT */}
          <main className="px-4 md:px-[40px] xl:px-[72px] pt-10 sm:pt-[72px]">
            {/* Tabs */}
            <div className="mt-[40px] flex items-center gap-[40px]">
              <div className="rounded-[4px] bg-[#f8fbf1] px-[16px] py-[16px]">
                <p className="text-[24px] font-semibold text-[#43483f]">
                  Images
                </p>
              </div>
              <div className="rounded-[4px] px-[16px] py-[16px]">
                <p className="text-[24px] font-semibold text-[#43483f]">
                  Videos
                </p>
              </div>
            </div>

            {/* Error / Loading */}
            {error && <p className="mt-6 text-sm text-red-600">{error}</p>}

            {loading && !error && (
              <p className="mt-6 text-sm text-slate-500">Loading gallery…</p>
            )}

            {/* Grid */}
            {!loading && !error && (
              <div className="mt-[41px] mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[40px] gap-y-[72px]">
                  {items.map((item, index) => (
                    <article
                      key={item.id}
                      className="flex  w-[370px] 2xl:w-[403px] cursor-pointer flex-col gap-[16px]"
                      onClick={() => openModal(index)}
                    >
                      {/* Image */}
                      <div className="relative w-full aspect-[400/300]">
                        <div className="absolute inset-0 bg-[#d9d9d9]" />
                        {item.thumb && (
                          <img
                            src={item.thumb}
                            alt={item.title}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        )}
                      </div>

                      {/* Text */}
                      <div className="flex flex-col gap-[4px]">
                        <p className="text-[20px] font-semibold text-[#43483f]">
                          {item.title}
                        </p>
                        {item.desc && (
                          <p className="text-[16px] text-[#73796e]">
                            {item.desc}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </main>

          {/* MODAL */}
          <GalleryModal
            item={selectedItem}
            loading={modalLoading}
            onPrev={showPrev}
            onNext={showNext}
            onClose={closeModal}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

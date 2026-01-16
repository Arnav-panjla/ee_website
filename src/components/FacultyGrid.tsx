"use client";
import React, { useEffect, useState } from "react";

type Faculty = {
  id: number;
  name: string;
  role: string;
  phone?: string;
  email?: string;
  research?: string;
  qualifications?: string;
  website?: string;
  img?: string;
};

const SAMPLE: Faculty[] = [
  {
    id: 1,
    name: "Tess Brown",
    role: "Office Manager",
    phone: "01126596102",
    email: "tess.brown@example.com",
    research: "Administration, coordination",
    qualifications: "MBA",
    website: "https://example.com/tess",
    img: "/face.png",
  },
  {
    id: 2,
    name: "Krishan Kant",
    role: "Assistant Professor",
    phone: "01126596103",
    email: "krishan.kant@example.com",
    research: "Power Systems, e-Mobility",
    qualifications: "Ph.D. Electrical Engineering",
    website: "https://example.com/krishan",
    img: "/face.png",
  },
  {
    id: 3,
    name: "Don Francis",
    role: "Founder & CEO",
    phone: "01126596104",
    email: "don.francis@example.com",
    research: "Entrepreneurship",
    qualifications: "Ph.D.",
    website: "https://example.com/don",
    img: "/face.png",
  },
];

export default function FacultyGrid({ data }: { data?: Faculty[] }) {
  const list = data ?? SAMPLE;
  const [selected, setSelected] = useState<Faculty | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
        {list.map((f) => (
          <button
            key={f.id}
            onClick={() => setSelected(f)}
            className="bg-gray-100 p-6 max-w-xs text-center shadow-sm hover:shadow-md transition rounded"
            aria-haspopup="dialog"
          >
            <div className="w-full aspect-[8/9] overflow-hidden mb-4 rounded">
              <img
                src={f.img ?? "/face.png"}
                alt={f.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-red-600 font-semibold">{f.name}</h3>
            <p className="text-xs text-gray-600 mt-1">{f.role}</p>
          </button>
        ))}
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSelected(null)}
          />

          <div className="relative bg-white w-[90vw] max-w-5xl h-[80vh] rounded shadow-lg overflow-hidden flex gap-12">
            {/* Left: image */}
            <div className="w-1/2 bg-gray-100 hidden md:block">
              <img
                src={selected.img ?? "/face.png"}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
            </div>

                {/* Right: details */}
                    <div className="flex-1 p-12 overflow-auto relative">

                    {/* Close Button */}
                    <button
                        onClick={() => setSelected(null)}
                        className="absolute top-4 right-4 text-2xl text-red-600 bg-transparent rounded hover:opacity-80"
                        aria-label="Close"
                    >
                        ✕
                    </button>

                    {/* MAIN FLEX COLUMN */}
                    <div className="flex flex-col justify-center gap-6 h-full">

                        {/* Header Section */}
                        <div className="flex flex-col gap-2">
                        <h2 className="text-5xl font-extrabold text-red-600">
                            {selected.name}
                        </h2>

                        <h3 className="text-xl font-semibold text-red-700">
                            {selected.role}
                        </h3>
                        </div>

                        {/* DETAILS LIST */}
                        <div className="flex flex-col gap-4">

                        {/* Phone */}
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold text-red-600">
                            Phone
                            </span>
                            <span className="text-md text-red-800">
                            {selected.phone ?? "—"}
                            </span>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold text-red-600">
                            Email
                            </span>
                            <span className="text-md text-red-800">
                            {selected.email ?? "—"}
                            </span>
                        </div>

                        {/* Research */}
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold text-red-600">
                            Research Areas
                            </span>
                            <span className="text-md text-red-800">
                            {selected.research ?? "—"}
                            </span>
                        </div>

                        {/* Website */}
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold text-red-600">
                            Website
                            </span>
                            <span className="text-md text-blue-600 break-all">
                            {selected.website ?? "—"}
                            </span>
                        </div>

                        </div>
                    </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

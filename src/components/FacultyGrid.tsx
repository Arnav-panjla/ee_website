"use client";
import React, { useEffect, useState, useMemo } from "react";

type Faculty = {
  id: number;
  name: string;
  email?: string;
  research?: string;
  clusters?: string;
  website?: string;
  category?: string[];
  professorType?: string;
  img?: string;
};

type FacultyGridProps = {
  data: Faculty[];
  selectedCategory: string | null;
  selectedProfessorType: string | null;
  searchQuery: string;
};

export default function FacultyGrid({
  data,
  selectedCategory,
  selectedProfessorType,
  searchQuery,
}: FacultyGridProps) {
  const [selected, setSelected] = useState<Faculty | null>(null);

  const filtered = useMemo(() => {
    let result = data;

    if (selectedCategory) {
      result = result.filter((f) => f.category?.includes(selectedCategory));
    }

    if (selectedProfessorType) {
      result = result.filter((f) => f.professorType === selectedProfessorType);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((f) => f.name.toLowerCase().includes(q));
    }

    return result;
  }, [data, selectedCategory, selectedProfessorType, searchQuery]);

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
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-12">
          No faculty found matching your criteria.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
        {filtered.map((f) => (
          <button
            key={f.id}
            onClick={() => setSelected(f)}
            className="group bg-gray-100 p-6 max-w-xs text-center rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            aria-haspopup="dialog"
          >
            <div className="w-full aspect-[8/9] overflow-hidden mb-4 rounded-md shadow-sm group-hover:shadow-lg transition-all duration-300">
              <img
                src={f.img ?? "/face.png"}
                alt={f.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-red-600 font-semibold group-hover:text-red-700 transition-colors duration-300">
              {f.name}
            </h3>
            <p className="text-xs text-gray-600 mt-1 line-clamp-1 group-hover:text-gray-700 transition-colors duration-300">
              {f.category?.join(", ") ?? "Faculty"}
            </p>
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

          <div className="relative bg-white w-[80vw] max-w-4xl h-[60vh] rounded shadow-2xl overflow-hidden flex gap-12 border border-gray-200">
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
                    {selected.category?.join(", ") ?? "Faculty"}
                  </h3>
                </div>

                {/* DETAILS LIST */}
                <div className="flex flex-col gap-4">
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

                  {/* Clusters */}
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-red-600">
                      Research Clusters
                    </span>
                    <span className="text-md text-red-800">
                      {selected.clusters ?? "—"}
                    </span>
                  </div>

                  {/* Website */}
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-red-600">
                      Website
                    </span>
                    {selected.website ? (
                      <a
                        href={selected.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md text-blue-600 break-all hover:underline"
                      >
                        {selected.website}
                      </a>
                    ) : (
                      <span className="text-md text-red-800">—</span>
                    )}
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

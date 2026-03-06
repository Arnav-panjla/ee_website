"use client";

import { useState } from "react";
import FacultyGrid from "../../components/FacultyGrid";
import facultyData from "../../data/faculty.json";

const categories = [
  "Communications",
  "Control and Automation",
  "Power Engineering",
  "Computer Technology",
  "Integrated Electronics and Circuits",
];

const professorTypes = [
  "Professor",
  "Associate Professor",
  "Assistant Professor",
  "Emeritus Professor",
  "Visiting Professor",
];

export default function People() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProfessorType, setSelectedProfessorType] = useState<
    string | null
  >(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full pt-20">
      {/* Hero Banner */}
      <section
        className="relative w-full h-[45vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: 'url("/image_iitd.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 w-[80vw] bg-black/50" />

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            ALL FACULTIES
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-200">
            The IIT Delhi Electrical Engineering faculty includes renowned
            professors, associate professors, and assistant professors
            specialising in areas like power systems, control, signal
            processing, communications, microelectronics, and AI applications.
          </p>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="w-full bg-white py-16 px-6">
        <div className="w-auto h-4"></div>

        <div className="w-full flex justify-center mx-auto gap-16">
          {/* Filter Options */}
          <div className="bg-red-700 shadow-lg border-6 border-red-700 flex flex-col">
            {/* Search Bar */}
            <div className="bg-red-700 text-white text-2xl font-bold text-center py-4">
              <div className="w-auto h-2"></div>
              Search Faculty
              <div className="w-auto h-2"></div>
            </div>
            <div className="px-4 py-3 bg-red-100">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name..."
                className="w-full px-4 py-2 border-2 border-red-700 rounded-md text-red-800 placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Research Category */}
            <div className="bg-red-700 text-white text-2xl font-bold text-center py-4 mt-4">
              <div className="w-auto h-2"></div>
              Research Category
              <div className="w-auto h-2"></div>
            </div>

            <ul>
              {/* All option */}
              <li
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-3 text-center text-xl font-medium cursor-pointer border-2 border-red-700
                  ${
                    selectedCategory === null
                      ? "bg-red-600 text-white"
                      : "bg-red-50 text-red-700 hover:bg-red-300"
                  }`}
              >
                <div className="w-auto h-1"></div>
                All Categories
                <div className="w-auto h-1"></div>
              </li>
              {categories.map((item, idx) => (
                <li
                  key={item}
                  onClick={() => setSelectedCategory(item)}
                  className={`px-4 py-3 text-center text-xl font-medium cursor-pointer border-2 border-red-700
                    ${
                      selectedCategory === item
                        ? "bg-red-600 text-white"
                        : idx % 2 === 0
                          ? "bg-red-100 text-red-700 hover:bg-red-300"
                          : "bg-red-200 text-red-800 hover:bg-red-300"
                    }`}
                >
                  <div className="w-auto h-1"></div>
                  {item}
                  <div className="w-auto h-1"></div>
                </li>
              ))}
            </ul>

            {/* Professor Type */}
            <div className="bg-red-700 text-white text-2xl font-bold text-center py-4 mt-4">
              <div className="w-auto h-2"></div>
              Professor Type
              <div className="w-auto h-2"></div>
            </div>

            <ul>
              {/* All option */}
              <li
                onClick={() => setSelectedProfessorType(null)}
                className={`px-4 py-3 text-center text-xl font-medium cursor-pointer border-2 border-red-700
                  ${
                    selectedProfessorType === null
                      ? "bg-red-600 text-white"
                      : "bg-red-50 text-red-700 hover:bg-red-300"
                  }`}
              >
                <div className="w-auto h-1"></div>
                All Types
                <div className="w-auto h-1"></div>
              </li>
              {professorTypes.map((item, idx) => (
                <li
                  key={item}
                  onClick={() => setSelectedProfessorType(item)}
                  className={`px-4 py-3 text-center text-xl font-medium cursor-pointer border-2 border-red-700
                    ${
                      selectedProfessorType === item
                        ? "bg-red-600 text-white"
                        : idx % 2 === 0
                          ? "bg-red-100 text-red-700 hover:bg-red-300"
                          : "bg-red-200 text-red-800 hover:bg-red-300"
                    }`}
                >
                  <div className="w-auto h-1"></div>
                  {item}
                  <div className="w-auto h-1"></div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 max-w-6xl">
            <div className="w-auto h-16"></div>
            <FacultyGrid
              data={facultyData}
              selectedCategory={selectedCategory}
              selectedProfessorType={selectedProfessorType}
              searchQuery={searchQuery}
            />
          </div>
        </div>
        <div className="w-auto h-20"></div>
      </section>
    </div>
  );
}

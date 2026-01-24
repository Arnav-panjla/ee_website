"use client";

import { useEffect, useRef } from "react";

export default function PhdPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nodes =
      containerRef.current?.querySelectorAll<HTMLElement>(".sa-item");
    if (!nodes) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.2 },
    );

    nodes.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full pt-20">
      <section
        className="relative w-full min-h-[50vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: 'url("/image_iitd.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#111",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 space-y-3 px-4 max-w-3xl sa-item from-left">
          <p className="text-sm font-semibold text-white tracking-[0.28em]">
            ACADEMICS
          </p>
          <h1 className="text-7xl font-extrabold text-white">PHD</h1>A rigorous
          doctoral program enabling students to pursue original research across
          microelectronics, power systems, AI/ML, communications, robotics, and
          emerging technologies. Graduates lead in academia, R&D, and deep-tech
          industries.
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className=" w-auto h-6 bg-white"></div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <section className="bg-white flex justify-center px-6 py-16">
        <div className="w-auto h-6 bg-white"></div>
        <div className="max-w-5xl  mx-auto flex items-center gap-10 space-y-10">
          <div className="flex-[3] text-center sa-item from-left">
            <div className="w-auto h-6"></div>
            <h1 className="text-5xl  text-orange-700">PHD</h1>
            <div className="w-auto h-6"></div>
            <div className=" w-auto h-2"></div>
            <p className="text-lg text-gray-600 mt-3 text-orange-700 leading-relaxed">
              The Ph.D. program enables students to pursue original research
              across a wide range of EE domains, including microelectronics,
              VLSI, photonics, power systems, e-mobility, signal processing,
              AI/ML, control, communication systems, and advanced materials.
              Doctoral scholars work closely with faculty in world-class
              research facilities—covering wafer-level characterization,
              MEMS/NEMS, energy harvesting, nanofabrication, integrated circuit
              design, optical systems, power electronics, smart grids, and more.
              The program emphasizes innovation, scientific rigor, and the
              creation of new knowledge, preparing graduates for careers in
              academia, industrial R&D, national labs, and emerging technology
              sectors.
            </p>
          </div>
          <div className="aspect-[8/9] overflow-hidden mb-4 sa-item from-right">
            <img
              src="/phd1.png"
              alt="Faculty-1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className=" w-auto h-6 bg-white"></div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className=" w-auto h-1 bg-white"></div>
      <section className="bg-orange-700 flex justify-center px-10 py-16">
        <div className="w-auto h-6 bg-white"></div>
        <div className="max-w-7xl  mx-auto flex flex-col items-center gap-4 space-y-10">
          <div className=" w-auto h-1 bg-transparent"></div>
          <h1 className="text-5xl text-white uppercase sa-item from-left">
            Major research outcomes
          </h1>
          <div className="flex items-center gap-4 space-y-10 sa-item from-right">
            <div className="flex-[1] aspect-[3/4] overflow-hidden mb-4">
              <img
                src="/msr1.png"
                alt="Faculty-1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-[2] aspect-[5/5] overflow-hidden mb-4">
              <img
                src="/msr2.png"
                alt="Faculty-1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-[1] aspect-[3/4] overflow-hidden mb-4">
              <img
                src="/msr3.png"
                alt="Faculty-1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className=" w-auto h-4 bg-transparent"></div>
        </div>
      </section>
      <div className=" w-auto h-16 bg-white"></div>

      <section className="w-full bg-white px-6 py-16 flex justify-center">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-center text-4xl font-semibold text-red-600 mb-10 sa-item from-left">
            Objective of the Programme:
          </h2>
          <div className="w-auto h-8"></div>

          {/* Objectives Grid */}
          <div className="grid grid-cols-1  h-auto md:grid-cols-3 gap-12 mb-12">
            {[
              "To enable original, high-impact research across diverse EE domains including microelectronics, VLSI, power and energy systems, communications, AI/ML, robotics, and intelligent systems.",
              "To advance knowledge through rigorous theoretical, computational, and experimental research using state-of-the-art laboratories and facilities.",
              "To develop independent researchers capable of contributing to academia, national laboratories, and industrial R&D at a global level.",
            ].map((text, idx) => (
              <div
                key={idx}
                className="bg-gray-200 shadow-lg rounded-lg px-6 py-6 text-xl text-red-600 leading-relaxed text-center sa-item from-right"
              >
                {text}
              </div>
            ))}
          </div>

          {/* Who should apply */}

          <div className="w-auto h-16"></div>

          <div className="flex flex-col items-center bg-gray-200 px-10 py-10 rounded-lg shadow-lg">
            <div className="w-auto h-16"></div>

            <h3 className="text-center text-3xl font-semibold text-red-600 mb-6">
              Who should apply?
            </h3>
            <div className="w-auto h-8"></div>
            <ul className="space-y-4 items-center text-xl text-red-600 leading-relaxed list-disc list-inside max-w-4xl mx-auto">
              <li>
                Highly motivated students with strong analytical ability and a
                passion for long-term research and innovation.
              </li>
              <li>
                Candidates aspiring to careers in academia, advanced industrial
                R&D, or leadership roles in deep-technology sectors.
              </li>
              <li>
                Professionals and graduates seeking to work on frontier problems
                aligned with national and global technological priorities.
              </li>
            </ul>
            <div className="w-auto h-16"></div>
          </div>
          <div className="w-auto h-8"></div>
        </div>
      </section>
    </div>
  );
}

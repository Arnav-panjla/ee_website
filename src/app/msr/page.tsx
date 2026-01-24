"use client";

import { useEffect, useRef } from "react";

export default function MsrPage() {
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
          <h1 className="text-7xl font-extrabold text-white">MSR</h1>
          Deeply research-driven program combining advanced coursework with a
          major thesis. Ideal for students aiming for innovation, publications,
          and specialized R&D roles in academia or industry.
        </div>
      </section>

      <section className="bg-white flex justify-center px-6 py-16">
        <div className="w-auto h-6 bg-white"></div>
        <div className="max-w-4xl  mx-auto flex items-center gap-10 space-y-10">
          <div className="flex-[3] text-center sa-item from-left">
            <div className="w-auto h-6"></div>
            <h1 className="text-5xl  text-orange-700">
              MSR – Master of Science (Research)
            </h1>
            <div className="w-auto h-6"></div>
            <div className=" w-auto h-2"></div>
            <p className="text-lg text-gray-600 mt-3 text-orange-700 leading-relaxed">
              The MSR program at IIT Delhi is designed for students who wish to
              pursue research-driven careers in electrical engineering. The
              program combines advanced coursework with a substantial research
              thesis under the guidance of EE faculty. Students gain in-depth
              exposure to experimental methods, mathematical modelling,
              integrated circuit design, intelligent systems, semiconductor
              device characterization, power systems, communication theory, or
              other departmental focus areas. MSR graduates are well prepared
              for R&D roles, academic careers, and specialized industry
              positions requiring strong analytical and research skills.
            </p>
          </div>
        </div>
      </section>

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
              "To develop strong research capabilities through a combination of advanced coursework and a substantial thesis in core and emerging areas of electrical engineering.",
              "To train students in experimental methods, modeling, and analytical techniques relevant to areas such as microelectronics, intelligent systems, signal processing, power, and communications.",
              "To prepare graduates for research-intensive careers in industry, R&D organizations, and academic environments.",
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

            <h3 className="text-center text-3xl font-semibold text-red-600 mb-6 sa-item from-left">
              Who should apply?
            </h3>
            <div className="w-auto h-8"></div>
            <ul className="space-y-4 items-center text-xl text-red-600 leading-relaxed list-disc list-inside max-w-4xl mx-auto sa-item from-right">
              <li>
                Students with a strong academic background who are interested in
                pursuing research and innovation in electrical engineering.
              </li>
              <li>
                Candidates seeking hands-on research experience before
                committing to a Ph.D. or advanced R&amp;D roles.
              </li>
              <li>
                Professionals aiming to deepen technical expertise and
                analytical skills in specialized EE domains.
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

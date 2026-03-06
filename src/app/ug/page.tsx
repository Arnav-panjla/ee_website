"use client";

import { useRef } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function UgPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useScrollReveal(containerRef);

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
          <h1 className="text-7xl font-extrabold text-white">UNDERGRADUATE</h1>
          Explore two dynamic pathways—EE1 (Electrical Engineering) and EE3
          (Power & Automation)—built on strong fundamentals and hands-on
          learning. Both programs prepare students to analyze, design, and
          innovate in rapidly evolving technological domains.
        </div>
      </section>

      <section className="bg-white flex justify-center px-6 py-16">
        <div className="w-auto h-6 bg-white"></div>
        <div className="max-w-4xl  mx-auto flex items-center gap-10 space-y-10">
          <div className="flex-[3] text-center sa-item from-left">
            <div className="w-auto h-6"></div>
            <h1 className="text-5xl uppercase text-orange-700">
              Undergraduate Program
            </h1>
            <div className="w-auto h-6"></div>

            <p className="text-lg mt-3 text-black leading-relaxed">
              The Department of Electrical Engineering at IIT Delhi offers two
              undergraduate programs—EE1 (Electrical Engineering) and EE3
              (Electrical Engineering: Power & Automation)—built on a strong
              foundation of mathematics, physics, and core engineering. EE1
              provides broad exposure across electronics, communication,
              microelectronics, signal processing, intelligent systems,
              computing, and power. EE3 offers a specialized pathway focused on
              power systems, renewable energy, automation, and e-mobility
              technologies. Both programs emphasize hands-on learning,
              interdisciplinary skills, modern laboratory training, and the
              ability to design and communicate real-world engineering
              solutions.
            </p>
            <div className=" w-auto h-8"></div>
          </div>
        </div>
      </section>

      <div className=" w-auto h-1 bg-white"></div>
      <section className="bg-orange-700 flex justify-center px-10 py-16">
        <div className="w-auto h-6 bg-white"></div>
        <div className="max-w-7xl  mx-auto flex flex-col items-center gap-4 space-y-10">
          <div className=" w-auto h-1 bg-transparent"></div>
          <h1 className="text-5xl text-white uppercase sa-item from-left">
            Why Choose EE@IITD ?
          </h1>
          <div className="flex items-center gap-12 space-y-10 sa-item from-right">
            <div className="flex flex-col gap-4 text-left">
              <ul className="space-y-4 text-2xl text-white leading-relaxed list-disc list-inside pl-6 max-w-5xl mx-auto">
                <li>Strong theoretical and mathematical foundation</li>
                <li>Enhanced hands-on and interdisciplinary exposure</li>
                <li>Flexible academic pathways</li>
                <li>Research and career opportunities</li>
              </ul>
            </div>
            <div className=" aspect-[1/1] overflow-hidden mb-4">
              <img
                src="/ug.png"
                alt="Faculty-1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className=" w-auto h-4 bg-transparent"></div>
          <div className=" text-white text-lg max-w-4xl text-center sa-item from-left">
            IIT Delhi is currently ranked No. 1 in India and 47th globally in
            Electrical & Electronic Engineering (QS 2025), making EE @ IITD the
            nation’s top choice for the field.
          </div>
          <div className=" w-auto h-4 bg-transparent"></div>
        </div>
      </section>
      <div className=" w-auto h-16 bg-white"></div>

      <section className="bg-white flex justify-center px-6 py-16">
        <div className="w-auto h-6 bg-white"></div>
        <div className="max-w-4xl  mx-auto flex items-center gap-10 space-y-10">
          <div className="flex-[3] text-center sa-item from-left">
            <div className="w-auto h-6"></div>
            <h1 className="text-5xl uppercase text-orange-700">
              How to Get Admission ?
            </h1>
            <div className="w-auto h-6"></div>

            <p className="text-lg mt-3 text-orange-700 leading-relaxed sa-item from-right">
              Admission to the B.Tech. programs (EE1 and EE3) in the Department
              of Electrical Engineering at IIT Delhi is based solely on
              performance in the Joint Entrance Examination (JEE Advanced),
              conducted annually for entry into IITs. Candidates must first
              qualify JEE Main, appear for JEE Advanced, and secure a rank high
              enough to be allotted a seat in Electrical Engineering at IIT
              Delhi through JoSAA counselling. Seat allocation depends on the
              candidate’s All India Rank, category, seat availability, and
              college preferences submitted during counselling. Once admitted,
              students join one of India’s most prestigious and rigorous EE
              programs, known for strong fundamentals, modern curriculum
              reforms, and industry–research integration.
            </p>
            <div className=" w-auto h-8"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

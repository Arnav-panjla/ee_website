"use client";

import { useEffect, useRef } from "react";

export default function PgPage() {

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nodes = containerRef.current?.querySelectorAll<HTMLElement>(".sa-item");
    if (!nodes) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.2 }
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
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#111',
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 space-y-3 px-4 max-w-3xl sa-item from-left">
          {/* <p className="text-sm font-semibold text-white tracking-[0.28em]">ADMISSION</p> */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">POSTGRADUATE</h1>
          <p className="text-lg text-white/85">
            Explore advanced postgraduate pathways that offer deep specialization and research opportunities across microelectronics, power systems, AI/ML, communications, and intelligent hardware. These programs equip students to innovate, conduct impactful research, and lead in cutting-edge technological domains.          
            </p>
        </div>
      </section>

      <section className="bg-white flex justify-center px-6 py-16">
        <div className="w-auto h-6 bg-white"></div>
        <div className="max-w-4xl  mx-auto flex items-center gap-10 space-y-10">
          <div className="flex flex-col justify-center text-center sa-item from-left">
                <div className="w-auto h-6"></div>
                <h1 className="text-4xl uppercase text-orange-700">
                    MSR – Master of Science (Research)
                </h1>
                <div className="w-auto h-6"></div>
                
                <p className="text-lg mt-3 text-black leading-relaxed sa-item from-right">
                    The MSR program at IIT Delhi is a research-focused pathway combining advanced coursework with a major thesis under EE faculty supervision. Students gain deep exposure to experimental methods, mathematical modelling, circuit and intelligent system design, semiconductor and device characterization, power systems, and communication theory. The program prepares graduates for research-intensive roles in industry, academia, and specialized technical domains.
                </p>
                <div className=" w-auto h-8"></div>
                <h1 className="text-4xl uppercase text-orange-700">
                    How to get Admission ?
                </h1>
                <div className="w-auto h-6"></div>
                
                <p className="text-lg mt-3 text-black leading-relaxed">
                    Admission to MSR involves a departmental shortlisting based on academic performance and/or GATE score, followed by a written test or interview. Final selection is merit-based and depends on research potential and faculty availability.
                </p>
                <div className=" w-auto h-8"></div>
            </div>
        </div>
      </section>


        <section className="bg-orange-700 flex justify-center px-6 py-16">
        <div className="w-auto h-6 bg-transparent"></div>
        <div className="max-w-4xl  mx-auto flex items-center gap-10 space-y-10">
          <div className="flex flex-col justify-center text-center sa-item from-left">
                <div className="w-auto h-6"></div>
                <h1 className="text-4xl uppercase text-white">
                    PHD
                </h1>
                <div className="w-auto h-6"></div>
                
            <p className="text-lg mt-3 text-white leading-relaxed sa-item from-right">
                    The Ph.D. program in Electrical Engineering at IIT Delhi offers opportunities for original research across diverse areas including microelectronics, VLSI, photonics, power systems, e-mobility, signal processing, AI/ML, control, communications, and advanced materials. Students work closely with faculty in state-of-the-art laboratories spanning device characterization, MEMS/NEMS, energy harvesting, nanofabrication, integrated circuits, optical systems, power electronics, and smart grids. The program emphasizes innovation, rigorous scholarship, and impactful research, preparing graduates for careers in academia, industrial R&D, national laboratories, and emerging deep-tech sectors.
                </p>
                <div className=" w-auto h-8"></div>
                <h1 className="text-4xl uppercase text-white">
                    How to get Admission ?
                </h1>
                <div className="w-auto h-6"></div>
                
                <p className="text-lg mt-3 text-white leading-relaxed sa-item from-right">
                    Ph.D. admission requires meeting IIT Delhi’s eligibility criteria through GATE/NET or equivalent, followed by a departmental interview evaluating research aptitude. Exceptional B.Tech/M.Tech candidates may be admitted directly based on academic excellence and performance in the selection process.
                </p>
                <div className=" w-auto h-8"></div>
            </div>

        </div>
      </section>



        <section className="bg-white flex justify-center px-6 py-16">
        <div className="w-auto h-6 bg-white"></div>
        <div className="max-w-4xl  mx-auto flex items-center gap-10 space-y-10">
          <div className="flex flex-col justify-center text-center sa-item from-left">
                <div className="w-auto h-6"></div>
                <h1 className="text-4xl uppercase text-orange-700">
                    MTECH
                </h1>
                <div className="w-auto h-6"></div>
                
            <p className="text-lg mt-3 text-black leading-relaxed sa-item from-right">
                    The M.Tech. in Integrated Electronics and Circuits offers advanced training in semiconductor technology, VLSI design, analog/digital IC design, intelligent systems, and chip-level engineering. Students learn to analyze complex electronic systems, design high-performance integrated circuits, and work with state-of-the-art EDA and fabrication tools. The program includes two streams—Integrated Circuits & Systems (ICS) and Integrated Intelligent Systems (IIS)—allowing students to align their training with interests ranging from semiconductor circuits to intelligent hardware. Graduates are equipped to contribute to national semiconductor initiatives, deep-tech industries, and cutting-edge hardware research.
                </p>
                <div className=" w-auto h-8"></div>
                <h1 className="text-4xl uppercase text-orange-700">
                    How to get Admission ?
                </h1>
                <div className="w-auto h-6"></div>
                
                <p className="text-lg mt-3 text-black leading-relaxed sa-item from-right">
                    Admission to the M.Tech program is through GATE, followed by institute-level COAP counselling. Candidates with strong GATE scores and relevant academic backgrounds are shortlisted and offered seats based on merit and availability.
                </p>
                <div className=" w-auto h-8"></div>
            </div>

        </div>
      </section>

      
    </div>
  );
}

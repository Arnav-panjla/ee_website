"use client";

import { useEffect, useRef } from "react";

export default function BtechPage() {
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
        <div className="relative z-10 space-y-3 px-4 max-w-3xl">
          <p className="text-sm font-semibold text-white tracking-[0.28em]">
            ACADEMICS
          </p>
          <h1 className="text-7xl font-extrabold text-white">B.TECH</h1>
          {/* <p className="text-lg text-white/85">
            A rigorous undergraduate curriculum that blends analytical depth with modern laboratory practice and industry exposure.
          </p> */}
        </div>
      </section>

      <section className="bg-white flex justify-center px-6 py-16">
        <div className="w-auto h-6 bg-white"></div>

        <div className="max-w-7xl  mx-auto flex items-center gap-10 space-y-10">
          <div className="flex-[2] aspect-[1/1] overflow-hidden mb-4 sa-item from-left">
            <img
              src="/ee1.png"
              alt="Faculty-1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-[3] text-left sa-item from-right">
            <h1 className="text-5xl font-extrabold underline text-black">
              Electrical Engineering
            </h1>
            <div className=" w-auto h-2"></div>
            <p className="text-lg text-gray-600 mt-3 leading-relaxed">
              The Electrical Engineering (EE) department at IIT Delhi offers a
              comprehensive B.Tech program that equips students with a strong
              foundation in electrical engineering principles, hands-on
              laboratory experience, and exposure to cutting-edge technologies.
              The curriculum is designed to foster analytical thinking,
              problem-solving skills, and innovation, preparing graduates for
              successful careers in academia, industry, and research.
            </p>
          </div>
        </div>
      </section>

      <div className=" w-auto h-1 bg-white"></div>
      <section className="bg-orange-700 flex justify-center px-10 py-16">
        <div className="max-w-7xl  mx-auto flex items-center gap-10 space-y-10">
          <div className="flex-[3] text-right sa-item from-left">
            <h1 className="text-5xl font-extrabold underline text-white">
              Electrical Engineering (Power and automation)
            </h1>
            <div className=" w-auto h-2"></div>
            <p className="text-lg text-white mt-3 leading-relaxed">
              The Electrical Engineering (EE3) department at IIT Delhi offers a
              comprehensive B.Tech program that equips students with a strong
              foundation in electrical engineering principles, hands-on
              laboratory experience, and exposure to cutting-edge technologies.
              The curriculum is designed to foster analytical thinking,
              problem-solving skills, and innovation, preparing graduates for
              successful careers in academia, industry, and research.
            </p>
          </div>
          <div className="flex-[2] aspect-[1/1] overflow-hidden mb-4 sa-item from-right">
            <img
              src="/ee3.png"
              alt="Faculty-1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <div className=" w-auto h-32 bg-white"></div>
    </div>
  );
}

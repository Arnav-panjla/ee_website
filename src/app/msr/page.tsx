export default function MsrPage() {
  const highlights = [
    {
      title: 'Research-first structure',
      description: 'A thesis-centric master program where students join a research group early and work closely with advisors.',
    },
    {
      title: 'Admissions',
      description: 'Typically through GATE/NET or institute-level evaluation plus interview; match with potential supervisors is emphasized.',
    },
    {
      title: 'Milestones',
      description: 'Coursework to build depth, proposal and candidacy reviews, followed by sustained thesis research and publication targets.',
    },
    {
      title: 'Outcomes',
      description: 'Graduates move to doctoral programs or research-focused roles in labs, startups, and technology companies.',
    },
  ];

  return (
    <div className="w-full pt-20">
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
        <div className="relative z-10 space-y-3 px-4 max-w-3xl">
          <p className="text-sm font-semibold text-white tracking-[0.28em]">ACADEMICS</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">MS(R) PROGRAM</h1>
          <p className="text-lg text-white/85">
            A research-intensive master pathway designed for students who want deep specialization and early publications.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 p-6 shadow-sm bg-white">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-3 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

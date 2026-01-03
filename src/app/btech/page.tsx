export default function BtechPage() {
  const highlights = [
    {
      title: 'Program design',
      description: 'Eight semesters of core EE courses, institute electives, open electives, and laboratory sequences that build depth and breadth.',
    },
    {
      title: 'Focus areas',
      description: 'Power systems, communications, signal processing, control, microelectronics, embedded systems, and emerging interdisciplinary tracks.',
    },
    {
      title: 'Experiential learning',
      description: 'Minor and honors options, summer internships, and capstone projects with industry or research groups.',
    },
    {
      title: 'Student outcomes',
      description: 'Graduates progress to core engineering roles, product development, higher studies, and technology entrepreneurship.',
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">B.TECH PROGRAM</h1>
          <p className="text-lg text-white/85">
            A rigorous undergraduate curriculum that blends analytical depth with modern laboratory practice and industry exposure.
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

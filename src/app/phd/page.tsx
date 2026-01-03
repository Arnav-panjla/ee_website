export default function PhdPage() {
  const highlights = [
    {
      title: 'Admissions and supervision',
      description: 'Entry through institute applications followed by tests/interviews; students align with supervisors and research groups early.',
    },
    {
      title: 'Research journey',
      description: 'Coursework to build depth, comprehensive examinations, proposal defense, and sustained research leading to publications.',
    },
    {
      title: 'Environment',
      description: 'Access to laboratories, centers of excellence, collaborations, and funding avenues subject to institute policies.',
    },
    {
      title: 'Outcomes',
      description: 'Graduates pursue academia, industrial R&D, deep-tech startups, and leadership roles in technology organizations.',
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">PH.D PROGRAM</h1>
          <p className="text-lg text-white/85">
            Doctoral scholars tackle open research problems with faculty mentors, advanced facilities, and a vibrant campus ecosystem.
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

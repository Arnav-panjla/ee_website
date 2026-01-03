export default function UgPage() {
  const highlights = [
    {
      title: 'Eligibility and process',
      description:
        'Admissions are through JEE (Main/Advanced) followed by JoSAA/CSAB seat allocation for Electrical Engineering programs.',
    },
    {
      title: 'Curriculum strength',
      description:
        'Foundations in circuits, signals, power, embedded systems, and computing with hands-on labs from the first year.',
    },
    {
      title: 'Learning experience',
      description:
        'Design studios, hardware builds, departmental societies, and institute-wide clubs to balance theory with practice.',
    },
    {
      title: 'Student support',
      description:
        'Advising, mentorship, and scholarship/aid options as per institute guidelines for eligible students.',
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
          <p className="text-sm font-semibold text-white tracking-[0.28em]">ADMISSION</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">UNDERGRADUATE (UG)</h1>
          <p className="text-lg text-white/85">
            Four-year B.Tech pathways that combine strong fundamentals with immersive laboratory and project experiences.
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

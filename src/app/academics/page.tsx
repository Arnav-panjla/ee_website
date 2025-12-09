export default function Academics() {
  const programs = [
    {
      title: "Electrical Engineering",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./ee1.png",
    },
    {
      title: "Electrical Enginnering (Power and automation)",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: "./ee3.png",
    }
  ];

  return (
    <div className="w-full pt-20">
      {/* Hero Banner */}
      <section
        className="relative w-full min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url("/image_iitd.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: '#111',
        }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            ACADEMICS
          </h1>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-6 bg-white flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full space-y-16">
          {programs.map((program, idx) => (
            <div
              key={program.title}
              className={`rounded-none w-full py-10 px-4 sm:px-8 ${
                idx % 2 ? 'bg-[#b3532e]/90 text-white' : 'bg-white'
              }`}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  idx % 2 ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
              >
                {/* Image */}
                <div className="w-full flex justify-center">
                  <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-gray-200" style={{ maxHeight: '380px' }}>
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full space-y-4">
                  <h3
                    className={`text-3xl font-bold ${
                      idx % 2 ? 'text-white' : 'text-red-600'
                    }`}
                  >
                    {program.title}
                  </h3>
                  <p
                    className={`leading-relaxed text-lg ${
                      idx % 2 ? 'text-white/90' : 'text-gray-700'
                    }`}
                  >
                    {program.description}
                  </p>
                  <a
                    href="#"
                    className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                      idx % 2
                        ? 'text-white hover:text-amber-200'
                        : 'text-red-600 hover:text-red-700'
                    }`}
                  >
                    Click here to learn more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

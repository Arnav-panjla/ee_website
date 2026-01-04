export default function About() {
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
          <h1 className="text-7xl font-extrabold text-white">PHD</h1>
          A rigorous doctoral program enabling students to pursue original research across microelectronics, power systems, AI/ML, communications, robotics, and emerging technologies. Graduates lead in academia, R&D, and deep-tech industries.
        </div>
      </section>
    </div>
  );
}

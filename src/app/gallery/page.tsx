export default function Gallery() {
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
          {/* <p className="text-sm font-semibold text-white tracking-[0.28em]">ACADEMICS</p> */}
          <h1 className="text-7xl font-extrabold text-white">Gallery</h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque minus rerum delectus debitis accusantium eligendi assumenda magnam suscipit tempora, eum repudiandae nihil, ratione rem ipsam quasi voluptatibus reprehenderit, natus aliquam?
        </div>
      </section>
    </div>
  );
}

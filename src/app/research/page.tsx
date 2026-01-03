export default function Gallery() {
  const images = [
    { id: 1, title: "Laboratory Work", category: "research" },
    { id: 2, title: "Student Projects", category: "projects" },
    { id: 3, title: "Department Events", category: "events" },
    { id: 4, title: "Campus Life", category: "campus" },
    { id: 5, title: "Collaboration", category: "research" },
    { id: 6, title: "Innovation", category: "projects" },
    { id: 7, title: "Conference", category: "events" },
    { id: 8, title: "Seminar", category: "events" },
    { id: 9, title: "Workshop", category: "projects" },
  ];

  return (
    <div className="w-full pt-20">
      {/* Hero Banner */}
      <section className="hero-section" style={{
        backgroundColor: '#1a1a1a',
        minHeight: '60vh',
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="section-title">GALLERY</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">📷</span>
                    </div>
                    <p className="text-white font-semibold">{image.title}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-red-600 mb-2">1000+</div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                High-Quality Images
              </p>
            </div>
            <div>
              <div className="text-5xl font-black text-red-600 mb-2">50+</div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                Events Captured
              </p>
            </div>
            <div>
              <div className="text-5xl font-black text-red-600 mb-2">15+</div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                Research Projects
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

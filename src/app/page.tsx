export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section with Background Image */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20"
        style={{
          backgroundImage: 'url("/image_iitd.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundColor: '#ffffff',
        }}
      >
        {/* Hero Content */}
        <div className="flex items-center justify-center w-full max-w-7xl">
          <div className="flex flex-col items-start justify-center z-20 px-4 sm:px-8 md:px-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-8 animate-slide-up">
              <span className="block text-yellow-100">MAKING</span>
              <span className="block text-yellow-100">CONNECTIONS</span>
              <span className="block text-white">DELIVERING</span>
              <span className="block text-white">RESULTS</span>
            </h1>
          </div>
        </div>
      </section>

      {/* What's Happening Section - Grid Layout */}
      <section
        className="
          relative w-full flex flex-col items-center
          gap-6 sm:gap-8 md:gap-10
          mb-32 px-6 sm:px-8 md:px-12 lg:px-16
          py-12 sm:py-16 md:py-20
        "    
          style={{
          backgroundImage: 'url("/image_iitd.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-700/90 to-red-700/40 z-0"></div>

        <div className="relative z-10 w-full max-w-7xl flex  gap-8 flex-col items-center">

          <div className="mt-10 sm:mt-12 md:mt-16 w-full h-10"></div> 

          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="mb-4 h-2 w-[5vw] bg-white h-1"></div>
            <div className="mb-4 h-2 w-[45vw] bg-transparent h-1"></div>
          </div>

          {/* <div className="mb-4 h-1 w-16 bg-white"></div> */}

          <h1 className="text-center text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8">
            WHAT&apos;S HAPPENING AROUND
          </h1>

            {/* <div className="mt-10 sm:mt-12 md:mt-16 w-full h-10"></div> */}

            <div className="grid w-full gap-8 px-4 mt-32 sm:px-6 justify-center grid-cols-[repeat(auto-fit,minmax(220px,270px))]">
            {[
              // {
              //   title: "Video Title",
              //   desc: "This is a great space to update your audience with a description of your video. Include information like…",
              //   duration: "02:05",
              //   thumb: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
              // },
              {
                title: "Video Title",
                desc: "This is a great space to update your audience with a description of your video. Include information like…",
                duration: "03:27",
                thumb: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Video Title",
                desc: "This is a great space to update your audience with a description of your video. Include information like…",
                duration: "02:05",
                thumb: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Video Title",
                desc: "This is a great space to update your audience with a description of your video. Include information like…",
                duration: "03:27",
                thumb: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Video Title",
                desc: "This is a great space to update your audience with a description of your video. Include information like…",
                duration: "02:05",
                thumb: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
              },
            ].map((video, idx) => (
              <div
                key={idx}
                className="bg-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              
                <div className="relative w-full h-32 sm:h-36 md:h-40">
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    style={{ maxHeight: '160px' }}
                  />
                  <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/80 flex items-center justify-center text-red-700 font-bold">
                      ▶
                    </div>
                  </div>
                </div>
                <div className="p-3 text-left bg-white/5">
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-100 text-xs leading-snug">
                    {video.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 w-full h-12"></div>
        </div>

      </section>




      <section className="w-full flex flex-col items-center bg-white px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-10">

          <div className="mt-10 sm:mt-12 md:mt-16 w-full h-12"></div>

          {/* Heading */}
          <div>
            <div className="mt-4 h-1 w-20 bg-red-600" />
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-red-600">
              RESEARCH
            </h2>
          </div>

          {/* Images layout */}
          <div className="flex flex-col lg:flex-row gap-6">

            {/* LEFT: large image */}
            <div className="lg:flex-[2] w-full">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded shadow-lg">
                <img
                  src="/robot_1.png"
                  alt="Intelligent Systems and Robotics"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT: stacked images */}
            <div className="lg:flex-[1] w-full flex flex-col gap-6">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded shadow">
                <img
                  src="/robot.png"
                  alt="Research Image 1"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="relative w-full aspect-[16/9] overflow-hidden rounded shadow">
                <img
                  src="/robot.png"
                  alt="Research Image 2"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          {/* Caption */}
          <p className="text-xl font-semibold text-red-700">
            Intelligent Systems and Robotics
          </p>

        </div>
      </section>


      {/* Fun Facts / Stats Section - Flexbox Layout */}
      <section
        className="relative w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 min-h-[60vh] md:min-h-[70vh]"
        style={{
          backgroundImage: 'url("/image_iitd.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-700/90 to-red-700/40 z-0"></div>

        <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <div className="w-16 h-1 bg-white mb-4"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-center">
              FUN FACTS
            </h2>
          </div>

          {/* Stats flex container */}
          <div className="w-full flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center min-w-[120px]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
                106
              </div>
              <p className="text-gray-100 text-xs sm:text-sm font-semibold whitespace-pre-line">
                HAPPY{'\n'}CLIENTS
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center min-w-[120px]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
                198
              </div>
              <p className="text-gray-100 text-xs sm:text-sm font-semibold whitespace-pre-line">
                WEBSITES{'\n'}LAUNCHED
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center min-w-[120px]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
                506
              </div>
              <p className="text-gray-100 text-xs sm:text-sm font-semibold whitespace-pre-line">
                SOCIAL{'\n'}CAMPAIGNS
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center min-w-[120px]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
                1603
              </div>
              <p className="text-gray-100 text-xs sm:text-sm font-semibold whitespace-pre-line">
                CUPS OF{'\n'}COFFEE
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default function MtechPage() {
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
          <h1 className="text-7xl font-extrabold text-white">M.tech</h1>
            Focused training in semiconductor technology, VLSI, and intelligent hardware design. Prepares students for cutting-edge roles in chip design, electronics innovation, and next-gen semiconductor technologies.        </div>
      </section>

{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="w-auto h-6 bg-white"></div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <section className="bg-white flex justify-center px-6 py-16">
        <div className="max-w-6xl  mx-auto flex items-center gap-10 space-y-10">
            <div className="flex-[5] text-center">
                <div className="w-auto h-6"></div>
                <h1 className="text-5xl  text-orange-700">
                    MTECH
                </h1>
                <div className="w-auto h-6"></div>
                <div className=" w-auto h-2"></div>
                <p className="text-lg text-gray-600 mt-3 text-orange-700 leading-relaxed">
                  The M.Tech. in Integrated Electronics and Circuits offers advanced training in semiconductor technology, VLSI design, analog/digital IC design, intelligent systems, and chip-level engineering. Students learn to analyze complex electronic systems, design high-performance integrated circuits, and work with state-of-the-art EDA and fabrication tools. The program includes two streams—Integrated Circuits & Systems (ICS) and Integrated Intelligent Systems (IIS)—allowing students to align their training with interests ranging from semiconductor circuits to intelligent hardware. Graduates are equipped to contribute to national semiconductor initiatives, deep-tech industries, and cutting-edge hardware research.
                </p>
            </div>

            <div className="flex-[4] flex-col items-center gap-4 space-y-10">
              <div className="flex items-center gap-2">
                <div className="flex-[1] aspect-[1/1] overflow-hidden mb-4">
                    <img
                        src="/msr1.png"
                        alt="Faculty-1"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-[1] aspect-[1/1] overflow-hidden mb-4">
                    <img
                        src="/msr3.png"
                        alt="Faculty-1"
                        className="w-full h-full object-cover"
                    />
                </div>
              </div>
                <div className="flex-[1] aspect-[2/1] overflow-hidden mb-4">
                    <img
                        src="/msr2.png"
                        alt="Faculty-1"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

        </div>
      </section>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    <div className=" w-auto h-6 bg-white"></div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <section className="bg-orange-700 flex justify-center px-10 py-16">
        <div className="w-auto h-6 bg-white"></div>
        <div className="max-w-7xl  mx-auto flex flex-col items-center gap-4 space-y-10">
            <div className=" w-auto h-1 bg-transparent"></div>
            <h1 className="text-5xl text-white uppercase">Major research outcomes</h1>
            <div className="flex items-center gap-4 space-y-10">
                <div className="flex-[1] aspect-[3/4] overflow-hidden mb-4">
                    <img
                        src="/msr1.png"
                        alt="Faculty-1"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-[2] aspect-[5/5] overflow-hidden mb-4">
                    <img
                        src="/msr2.png"
                        alt="Faculty-1"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-[1] aspect-[3/4] overflow-hidden mb-4">
                    <img
                        src="/msr3.png"
                        alt="Faculty-1"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className=" w-auto h-4 bg-transparent"></div>
        </div>
      </section>

{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className=" w-auto h-16 bg-white"></div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <section className="w-full bg-white px-6 py-16 flex justify-center">
        <div className="max-w-6xl mx-auto">

            {/* Title */}
            <h2 className="text-center text-4xl font-semibold text-red-600 mb-10">
            Objective of the Programme:
            </h2>
            <div className="w-auto h-8"></div>

            {/* Objectives Grid */}
            <div className="grid grid-cols-1  h-auto md:grid-cols-3 gap-12 mb-12">
            {[
                "To develop strong research capabilities through a combination of advanced coursework and a substantial thesis in core and emerging areas of electrical engineering.",
                "To train students in experimental methods, modeling, and analytical techniques relevant to areas such as microelectronics, intelligent systems, signal processing, power, and communications.",
                "To prepare graduates for research-intensive careers in industry, R&D organizations, and academic environments.",
            ].map((text, idx) => (
                <div
                key={idx}
                className="bg-gray-200 shadow-lg rounded-lg px-6 py-6 text-xl text-red-600 leading-relaxed text-center"
                >
                {text}
                </div>
            ))}
            </div>

            <div className="w-auto h-16"></div>
            
        </div>
        </section>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className=" w-auto h-16 bg-white"></div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <section className="bg-orange-700 flex justify-center px-6 py-16">
        <div className="max-w-6xl  mx-auto flex flex-col items-center gap-10 space-y-10">
            <div className="text-center">
                <div className="w-auto h-6"></div>
                <h1 className="text-5xl uppercase text-white">
                    Major Research Outcome
                </h1>
                <div className="w-auto h-6"></div>
            </div>

            <div className="text-center text-white text-lg max-w-4xl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, perferendis, mollitia fuga placeat repellat quo corporis, ad cumque sapiente tempore quam facilis deleniti quae minus vero aspernatur. Voluptatem, nobis architecto?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, perferendis, mollitia fuga placeat repellat quo corporis, ad cumque sapiente tempore quam facilis deleniti quae minus vero aspernatur. Voluptatem, nobis architecto?
              </p>
              <div className="w-auto h-6"></div>
            </div>
        </div>
      </section>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className=" w-auto h-16 bg-orange-700"></div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <section className="bg-white flex justify-center px-6 py-16">
        <div className="max-w-6xl  mx-auto flex flex-col items-center gap-4 space-y-10">
          <div className="w-auto h-1"></div>
          <h1 className=" text-orange-700 text-4xl font-semibold text-center text-shadow-lg">
            Who should apply?
          </h1>
          <div className="w-auto h-1"></div>
          <div className="flex flex-col gap-4 text-left">
                    <ul className="flex flex-col gap-4 text-xl text-orange-700 leading-relaxed list-disc list-outside pl-6 max-w-5xl mx-auto">
                        <li>Engineers and professionals seeking to accelerate their careers in semiconductor technology, chip design,and electronic system innovation will benefit from this program.</li>
                        <li>Individuals eager to gain hands-on expertise in VLSI circuit development, hardware verification, andintelligent system integration for modern industrial applications should apply. </li>
                        <li>Those interested in working with cutting-edge technologies for consumer electronics, automotive,telecommunications, and IoT—where advanced semiconductor solutions drive industry growth—will find thisprogram highly relevant.</li>
                        <li>Industry practitioners aiming to upskill or transition into roles in design automation, embedded systems, orsemiconductor manufacturing, as well as those aspiring to lead R&D teams or drive innovation in techcompanies, are ideal candidates. </li>
                    </ul>
                </div>
          <div className="w-auto h-1"></div>
        </div>
      </section>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className=" w-auto h-16 bg-white"></div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
}

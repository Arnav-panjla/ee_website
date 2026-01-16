import FacultyGrid from "../../components/FacultyGrid";

export default function People() {
  return (
    <div className="w-full pt-20">
      {/* Hero Banner */}
      <section
        className="relative w-full h-[45vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: 'url("/image_iitd.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 w-[80vw] bg-black/50" />

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            ALL FACULTIES
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-200">
            The IIT Delhi Electrical Engineering faculty includes renowned
            professors, associate professors, and assistant professors
            specialising in areas like power systems, control, signal
            processing, communications, microelectronics, and AI applications.
          </p>
        </div>
      </section>

      {/* Faculty Section */}

      <section className="w-full bg-white py-16 px-6">
        <div className="w-auto h-4"></div>

        <div className="w-full flex justify-center mx-auto gap-16">
          {/* Filter Options */}
          <div className=" bg-red-700 shadow-lg border-6 border-red-700 flex flex-col">
            {/* Research Category */}
            <div className="bg-red-700 text-white text-3xl font-bold text-center py-4">
              <div className="w-auto h-4"></div>
              Research Category
              <div className="w-auto h-2"></div>
            </div>

            <ul>
              {[
                "Communications",
                "Control and Automation",
                "Power Engineering",
                "Computer Technology",
                "Integrated Electronics and Circuits",
              ].map((item, idx) => (
                <li
                  key={item}
                  className={`px-4  py-3 text-center text-2xl font-medium cursor-pointer border-2 border-red-700
                    ${
                      idx % 2 === 0
                        ? "bg-red-100 text-red-700"
                        : "bg-red-200 text-red-800"
                    }
                    hover:bg-red-300`}
                >
                  <div className="w-auto h-2"></div>
                  {item}
                  <div className="w-auto h-2"></div>
                </li>
              ))}
            </ul>

            {/* Professor */}
            <div className="w-auto h-18"></div>
            <div className="bg-red-700 text-white text-3xl font-bold text-center py-4 mt-4">
              <div className="w-auto h-2"></div>
              Professor
              <div className="w-auto h-2"></div>
            </div>

            <ul>
              {[
                "Professor",
                "Associate Professor",
                "Assistant Professor",
                "Emeritus Professor",
                "Visiting Professor",
              ].map((item, idx) => (
                <li
                  key={item}
                  className={`px-4 py-3 text-center text-2xl font-medium cursor-pointer border-6 border-red-700
                    ${
                      idx % 2 === 0
                        ? "bg-red-100 text-red-700"
                        : "bg-red-200 text-red-800"
                    }
                    hover:bg-red-300`}
                >
                  <div className="w-auto h-2"></div>
                  {item}
                  <div className="w-auto h-2"></div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 max-w-4xl">
            <div className="w-auto h-16"></div>
            <FacultyGrid />
          </div>
        </div>
        <div className="w-auto h-20"></div>
      </section>
    </div>
  );
}

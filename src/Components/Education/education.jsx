import React from "react";
import { education } from "../../constant";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-46 h-1 bg-[#22de14] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
          Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex items-center mb-16 ${index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
          >
            {/* Card */}
            <div className="w-full sm:max-w-md p-6 rounded-2xl border border-white bg-gray-900 shadow-[0_0_20px_rgba(130,69,236,0.3)] backdrop-blur-md transform transition duration-300 hover:scale-105">

              <div className="flex items-center gap-4">

                {/* School Logo */}
                <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>

                  <h4 className="text-sm text-gray-300">
                    {edu.school}
                  </h4>

                  <p className="text-xs text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-semibold">
                Grade : {edu.grade}
              </p>

              <p className="mt-2 text-gray-400">
                {edu.desc}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
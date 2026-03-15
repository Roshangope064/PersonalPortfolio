import React from 'react'
import { SkillsInfo } from '../../constant'
import Tilt from "react-parallax-tilt";

const skills = () => {
  return (
    <section
      id="skills"
      className="py-20 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-[#050414] "
    >
      <div className="bg-[#050414] clip-path-custom">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
          <div className="w-24 h-1 bg-[#22de14] mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            A showcase of the technical skills I’ve developed by building real projects, solving problems, and continuously learning new technologies.
          </p>
        </div>
        {/* Skill Categories */}
        <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
          {SkillsInfo.map((category) => (
            <div
              key={category.title}
              className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
                {category.title}
              </h3>
              {/* Skill Items - 3 per row on larger screens */}
              <Tilt
                key={category.title}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-center min-h-48px bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-3 text-center"
                    >
                      {category.title === "Hard Skills" ? (
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-6 h-6 sm:w-8 sm:h-8"
                        />
                      ) : (
                        <span className="text-xs sm:text-sm text-white text-center wrap-break-word leading-tight max-w-120px font-sans">
                          {skill.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default skills

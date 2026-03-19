import React from 'react';
import { TypeAnimation } from "react-type-animation";
import Tilt from 'react-parallax-tilt'
import ProfileImage from '../../assets/Profile/profile.png'

const About = () => {
    return (
        <section
            id="about"
            className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-4 md:mt-6 lg:mt-8"
        >
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                {/* Left Side */}
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                    {/* Greeting */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>
                    {/* Name */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Roshan Gope
                    </h2>
                    {/* Skills Heading with Typing Effect */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
                        <span className="text-white">
                            I specialize in{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Data Analyst",
                                2000,
                                "SQL & Python Analyst",
                                2000,
                                "Data Visualization",
                                2000,
                                "Business Intelligence",
                                2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            cursor={true}
                            className="text-[#8245ec] font-bold whitespace-nowrap"
                        />
                    </h3>
                    {/* About Me Paragraph */}
                    <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                        I am an aspiring Data Analyst passionate about transforming raw data into meaningful insights.
                        I have hands-on experience with SQL, Python, Excel, and data visualization tools to clean, analyze, and present data effectively.
                        I am currently seeking an opportunity to begin my career as a Data Analyst and contribute to data-driven decision making.
                    </p>
                    {/* Resume Button */}
                    <a
                        // Add Resume Link
                        href="https://drive.google.com/file/d/1oKC_2Ptoe1by7FtzsNjL9WfhualOyzb0/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                    >
                        DOWNLOAD CV
                    </a>
                </div>
                {/* Right Side */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <Tilt
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-30rem md:h-30rem"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <img
                            src={ProfileImage}
                            alt="Roshan Gope"
                            className="w-full h-full  rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                        />
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

export default About;


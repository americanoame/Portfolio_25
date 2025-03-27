"use client";

import { useState } from "react";
import Image from "next/image";

const About = () => {
  const [activeTab, setActiveTab] = useState<"skills" | "education">("skills");

  return (
    <section className="animate-fadeIn flex flex-col md:flex-row gap-8 p-18 dark:bg-yellow-600 text-neutral-900 dark:text-neutral-100 rounded-md">
      {/* Left Side - About Me */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start">
        {/* Profile Image */}
        <Image
          src="/image/about-img.jpg" // Update with your image path
          alt="Profile"
          width={160} // Set the width to your desired size
          height={160} // Set the height to maintain aspect ratio
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 shadow-lg"
        />

        <h2 className="text-3xl dark:text-gray-300 font-bold mb-4">About Me</h2>

        <p className="leading-loose dark:text-gray-300 text-center md:text-left">
          I&apos;m a highly motivated Software Engineer with a passion for web
          development and a strong background in customer service. I excel at
          delivering results and building effective web solutions. My experience
          in customer service allows me to understand user needs and create
          seamless digital experiences.
        </p>
      </div>

      <div className="hidden md:block border-l border-neutral-300 dark:border-neutral-700 mx-4"></div>

      {/* Right Side - Tabs (Skills, Education, Experience) */}
      <div className="md:w-1/2">
        <div className="flex space-x-4 border-b border-neutral-700 pb-2">
          <button
            className={`text-lg font-medium ${
              activeTab === "skills"
                ? "text-pink-600 border-b-2 border-pink-600"
                : "text-neutral-600 dark:text-neutral-300"
            }`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button
            className={`text-lg font-medium ${
              activeTab === "education"
                ? "text-pink-600 border-b-2 border-pink-600"
                : "text-neutral-600 dark:text-neutral-300"
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>

        {/* Content Section */}
        <div className="relative min-h-[500px]">
          <div className="mt-4 transition-all duration-500 absolute top-0 left-0 w-full">
            {activeTab === "skills" && (
              <div className="animate-fadeIn leading-loose">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Languages
                  </h3>
                  <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 mb-4">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Frameworks & Libraries
                  </h3>
                  <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 mb-4">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Redux</li>
                    <li>Tailwind CSS</li>
                    <li>Bootstrap</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Backend & Tools
                  </h3>
                  <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Postgres</li>
                    <li>Git & GitHub</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div className="animate-fadeIn leading-loose">
                <h3 className="text-xl font-semibold">Education</h3>
                <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300">
                  <li>Rutgers University Coding Bootcamp</li>
                  <li>Full Stack Web Developer</li>
                  <li className="text-sm leading-loose text-neutral-700 dark:text-neutral-300">
                    Nov 17 2022 - Feb 17 2023
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

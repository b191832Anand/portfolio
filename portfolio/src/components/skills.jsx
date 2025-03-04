import React from "react";
import { FaJava, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiMongodb, SiExpress, SiC, SiNextdotjs, SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="text-white w-full flex items-center justify-center mt-5 mb-5 px-5">
      <div className="w-full md:max-w-4xl bg-gray-800 rounded-lg p-6 shadow-lg">
        <h1 className="font-bold text-3xl mb-6 text-center text-gray-200">Skills</h1>

        <div className="flex flex-col gap-8">
          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">Programming</h2>
            <ul className="flex flex-wrap gap-3">
              <li className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg shadow-md">
                <SiCplusplus className="text-blue-500 text-lg" /> C++
              </li>
              <li className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg shadow-md">
                <FaJava className="text-red-600 text-lg" /> Java
              </li>
              <li className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg shadow-md">
                <FaPython className="text-yellow-500 text-lg" /> Python
              </li>
              <li className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg shadow-md">
                <SiC className="text-gray-600 text-lg" /> C
              </li>
             
              <li className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg shadow-md">
                <SiTypescript className="text-blue-400 text-lg" /> TypeScript
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">Web Technologies</h2>
            <ul className="flex flex-wrap gap-3">
              <li className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg shadow-md">
                <FaHtml5 className="text-orange-500 text-lg" /> HTML
              </li>
              <li className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg shadow-md">
                <FaCss3Alt className="text-blue-500 text-lg" /> CSS
              </li>
              <li className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg shadow-md">
                <SiJavascript className="text-yellow-400 text-lg" /> JavaScript
              </li>
              <li className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg shadow-md">
                <FaReact className="text-blue-400 text-lg" /> React
              </li>
              <li className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg shadow-md">
                <FaNodeJs className="text-green-500 text-lg" /> Node.js
              </li>
              <li className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg shadow-md">
                <SiNextdotjs className="text-gray-400 text-lg" /> Next.js
              </li>
              <li className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg shadow-md">
                <SiExpress className="text-gray-300 text-lg" /> Express.js
              </li>
              <li className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg shadow-md">
                <SiMongodb className="text-green-400 text-lg" /> MongoDB
              </li>
              <li className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg shadow-md">
                <FaDatabase className="text-green-500 text-lg" /> SQL
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Skills;

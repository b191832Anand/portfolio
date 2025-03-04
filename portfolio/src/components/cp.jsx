import React from 'react';
import { SiLeetcode } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa"; // Alternative for CodeChef

const CP = () => {
  return (
    <div className='text-white w-full flex justify-center items-center mt-5 mb-5 px-5'>
      <div className="bg-gray-800 w-full md:max-w-4xl rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">CP Profile</h1>
        
        <div className="flex gap-6">
          <a href="https://leetcode.com/u/anand_2854/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <SiLeetcode className="text-yellow-500 text-4xl" />
            <span className="text-gray-300 mt-2 text-sm">LeetCode</span>
          </a>
          
          <a href="https://www.codechef.com/users/anand_2816" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <FaUserSecret className="text-gray-400 text-4xl" />
            <span className="text-gray-300 mt-2 text-sm">CodeChef</span>
          </a>
          
          <a href="https://codeforces.com/profile/b191832" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <FaCode className="text-blue-400 text-4xl" />
            <span className="text-gray-300 mt-2 text-sm">Codeforces</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CP;

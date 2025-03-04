import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact" className='text-white w-full flex justify-center items-center mt-5 mb-5 px-5'>
      <div className="bg-gray-800 w-full md:max-w-4xl rounded-lg p-6 shadow-lg">
        <h1 className='text-2xl font-bold text-gray-200 mb-4'>Contact Me!</h1>
        <div className="flex flex-col items-center gap-3 mb-3">
          <div className="flex items-center gap-2">
            <AiOutlineMail className="text-red-500 text-xl" />
            <p className="break-all text-lg font-semibold cursor-pointer hover:text-blue-500">
              anandkumarch2003@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlinePhone className="text-green-500 text-xl" />
            <p className="text-lg font-semibold cursor-pointer hover:text-blue-500">
              +91 9701674944
            </p>
          </div>
          <a href='https://www.instagram.com/_anand_3373/' target='_blank' rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
          <FaInstagram className="text-pink-500 text-xl" />
          <span className="text-lg font-semibold">@anand_3373</span>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;  

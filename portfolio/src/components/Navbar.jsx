import React, { useState, useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      <div className="flex justify-between md:justify-evenly items-center p-2 bg-gray-900 text-white fixed w-full z-10">
        <h1 className="text-2xl cursor-pointer font-semibold">Portfolio</h1>
        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
        <div className="cursor-pointer z-50 md:hidden" onClick={() => setIsOpen(true)}>
          <FiAlignJustify size={28} className="hover:scale-110 transition-transform" />
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}></div>
      )}

      <div
        className={`fixed top-0 right-0 h-screen bg-gray-800 text-white flex flex-col items-center gap-6 p-6 text-lg font-medium transition-transform duration-500 z-50 w-80 md:w-96 
        ${isOpen ? "translate-x-0" : "translate-x-full"} shadow-lg`}
      >
        <div className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsOpen(false)}>
          <RxCross2 size={28} className="hover:scale-110 transition-transform" />
        </div>
        <a href="#about" className="hover:text-blue-400 mt-12" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="#skills" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
          Skills
        </a>
        <a href="#projects" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
          Projects
        </a>
        <a href="#contact" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </div>
    </>
  );
}

export default Navbar;

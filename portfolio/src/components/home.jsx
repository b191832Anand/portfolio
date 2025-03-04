import React, { useState, useEffect } from "react";
import img from "../assets/anand.jpeg";

const Home = () => {
  const texts = ["A MERN stack developer", "A Competitive Programmer"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 50;

    if (charIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 1000);
    }
  }, [charIndex, index]);

  return (
    <div id="about" className="text-white w-full flex justify-center items-center mt-5 px-5">
      <div className="w-full max-w-4xl bg-gray-800 flex flex-wrap md:flex-nowrap justify-between p-6 items-center rounded-lg shadow-lg gap-6">
        <div className="transform transition-transform duration-300 ease-in-out hover:scale-110 flex justify-center items-center w-full md:w-1/3">
          <img src={img} alt="Profile" className="w-36 h-36 md:w-52 md:h-52 rounded-full" />
        </div>
        <div className="flex flex-col gap-3 w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl font-bold">Hi, I am D AnandKumar</h1>
          <h1 className="text-white text-2xl">
            {displayText}
            <span className="animate-blink">|</span>
          </h1>
          <p className="text-lg text-gray-300">
            I am a Computer Science student at <span className="text-blue-400 font-semibold">RGUKT Basar</span>.  
            I have a strong foundation in <span className="text-green-400 font-semibold">Competitive Programming</span>,  
            where I enjoy solving complex algorithmic problems efficiently.  
            Alongside CP, I specialize in full-stack web development using the <span className="text-yellow-400 font-semibold">MERN stack</span>,  
            building scalable and dynamic applications.  
            I am always eager to learn, optimize, and explore new technologies to enhance my skills.  
          </p>

          <div className="flex justify-center mt-4">
            <a
              href="https://drive.google.com/file/d/1fk4bpXhEoXTm5nOueWajejJN9zCGimN7/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

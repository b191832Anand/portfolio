import React from 'react';
import codex from '../assets/codex.png';
import developers from '../assets/developer_hub.png';
import portfolio from '../assets/portfolio.png';

const Project = () => {
  return (
    <div id="projects" className="w-full flex justify-center items-center text-white">
      <div className="w-full md:max-w-4xl rounded-lg bg-gray-800 p-6">
        <h1 className="text-3xl font-bold mb-5 px-2 ">Projects</h1>
        
        {[ 
          { title: 'Codex', img: codex, link: 'https://codex-mern.vercel.app', github: 'https://github.com/b191832Anand/codex', desc: 'Codex is a resource and resume management project that helps developers organize.' },
          { title: 'Developer Hub', img: developers, link: 'https://developers-hub-3.vercel.app', github: 'https://github.com/b191832Anand/developers_hub', desc: 'A platform for developers to connect, share projects, and collaborate.' },
          { title: 'Portfolio', img: portfolio, link: 'https://portfolio-seven-ruddy-31.vercel.app/', github: 'https://github.com/b191832Anand/portfolio', desc: 'My personal portfolio showcasing my skills, projects, and experience.' }
        ].map((project, index) => (
          <div key={index} className=" p-4 rounded-lg shadow-md bg-black mb-6">
            <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
            <div className="w-full flex justify-center">
              <img src={project.img} className="w-full max-w-3xl h-auto rounded-lg" alt={project.title} />
            </div>
            <p className="text-gray-300 text-lg mt-1 break-words">{project.desc}</p>
            <div className="flex justify-center items-center gap-3 mt-3 ">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700">Live Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-4 py-2 rounded-lg text-white">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

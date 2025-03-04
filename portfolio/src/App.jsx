import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/home'
import Skills from './components/skills'
import Project from './components/project'
import Cp from './components/cp'
import Footer from './components/footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-10'>
      <Home/>
      <Skills/> 
      <Cp/>
      <Project/>        
      <Footer/>                                   
      </div>
    </div>
  );
};

export default App;

"use client";
import React from 'react'
import Herosection from './Herosection';
import GetInTouch from './GetInTouch';
import Education from '../education/Education';
import Experience from '../experience/Experience';
import Skill from '../skill/Skills';

const Home: React.FC = () => {
  return (
    <div className='bg-background'>
      <Herosection />
      <Experience />
      <Skill />
      <Education />
      <GetInTouch />
    </div>
  )
};

export default Home;
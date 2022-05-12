import React from 'react';
import aboutMeImage from "../../assets/Intro.jpg"

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <div className='flex-row'>
        <img src={aboutMeImage} className="my-2" style={{ width: "30%" }} alt="Franklin sitting" />
        <p id='bio'>Hi babes, I'm Franklin</p>
      </div>
      
    </section>
  );
}

export default About;

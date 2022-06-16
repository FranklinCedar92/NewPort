import React from 'react';
import aboutMeImage from "../../assets/Intro.jpg"

function About() {
  return (
    <section className="my-5 nav">
      <h1 id="about">About Me</h1>
      <div className='flex-row mx-2'>
        <img src={aboutMeImage} className="my-2" style={{ width: "30%" }} alt="Franklin sitting" />
        <div className='mx-2'>
          <p id='bio'><strong>In October of 2018,</strong> Franklin (he/they) completed their MSc in Linguistics from the University of Edinburgh, 
                  in Edinburgh, Scotland. Since then, they have been a gardener, piano teacher, German tutor, product photographer, barista, gogo dancer, 
                  lumberjack, model, florist, and office manager. Franklin's initial interest in programming came from an idea regarding 
                  the intersection of natural language processing, language documentation, and sonography. They have a special knack for 
                  languages and analysis, with a bent toward creativity. 
          </p>
        </div>
      </div>
      
    </section>
  );
}

export default About;

import React from 'react';
import aboutMeImage from "../../assets/5K3A2012.jpg"

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={aboutMeImage} className="my-2" style={{ width: "30%" }} alt="Franklin sitting" />
    </section>
  );
}

export default About;

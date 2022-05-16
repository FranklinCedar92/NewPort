import React from 'react';
import resumePhoto from '../../assets/resume.png';

function Resume(props) {

    const currentCategory = {
        name: "Resume",
        description: "Click the image below to download my resume."
    };

    return (
        <div>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.description}</p>
            <a href="../../assets/Franklin_Cedar_Brown_-_Project_Manager.pdf" download={"Franklin Brown"}>
                <img src={resumePhoto} alt='resume' className="my-2" style={{ width: "30%" }}/>
            </a>
        </div>
    )
}

export default Resume;
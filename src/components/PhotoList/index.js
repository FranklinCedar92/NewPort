import React from 'react';
// Each photo imported
import RunBuddyPhoto from "../../assets/portfolio/RunBuddy.jpg";
import EmpyTrackyPhoto from '../../assets/portfolio/EmpyTracky.png';
import photoPortPhoto from "../../assets/portfolio/OhSnap.png";
import hyperStheticPhoto from "../../assets/portfolio/HyperSthetic.png";
import noteTakerPhoto from "../../assets/portfolio/Notey_McTaker.png";
import lexPhoto from "../../assets/portfolio/Lexiconne.png";

const Projects = () => {

    //list of projects
    return (
        <div>
            <div className='flex-row projects'>
                <div>
                    <h3>RunBuddy</h3>
                    <img src={RunBuddyPhoto} style={{ width: "40%" }} alt="run buddy"/>
                    <p>
                        See the <a href="https://github.com/FranklinCedar92/run-buddy">repo</a> or the <a href="https://franklincedar92.github.io/run-buddy/">page</a>.
                    </p>
                </div>   
                <div>
                    <h3>EmpyTracky</h3>
                    <img src={EmpyTrackyPhoto} style={{ width: "40%" }} alt="empy tracky"/>
                    <p>
                        See the <a href="https://github.com/FranklinCedar92/EmpyTracky">repo</a>.
                    </p>
                </div>   
                <div>
                <h3>OhSnap</h3>
                    <img src={photoPortPhoto} style={{ width: "40%" }} alt="oh snap"/>
                    <p>
                        See the <a href="https://github.com/FranklinCedar92/photo-port">repo</a> or the <a href="http://FranklinCedar92.github.io/photo-port">page</a>.
                    </p>
                </div>   
                <div>
                <h3>HyperSthetic</h3>
                    <img src={hyperStheticPhoto} style={{ width: "40%" }} alt="hypersthetic"/>
                    <p>
                        See the <a href="https://github.com/FranklinCedar92/Hypersthetic_Franklin">repo</a> or the <a href="https://franklincedar92.github.io/Hypersthetic_Franklin/">page</a>.
                    </p>
                </div>   
                <div>
                <h3>Notey McTaker</h3>
                    <img src={noteTakerPhoto} style={{ width: "40%" }} alt="note taker"/>
                    <p>
                        See the <a href="https://github.com/FranklinCedar92/Notey_McTaker">repo</a> or the <a href="https://secure-scrubland-32243.herokuapp.com/">page</a>.
                    </p>
                </div>   
                <div>
                <h3>L'exiconne</h3>
                    <img src={lexPhoto} style={{ width: "40%" }} alt="lexicon"/>
                    <p>
                        See the <a href="https://github.com/FranklinCedar92/Lexiconne_GP2">repo</a> or the <a href="https://cryptic-chamber-15653.herokuapp.com/login">page</a>.
                    </p>
                </div>                
            </div>
        </div>
    )
}

export default Projects;


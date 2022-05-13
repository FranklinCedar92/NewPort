import React, { useState } from 'react';

const PhotoList = ({ category }) => {

    /*const [photos] = useState([
        {
            name: 'RunBuddy',
            category: 'portfolio',
            description: 'RunBuddy'
        },
        {
            name: 'EmpyTracky',
            category: 'portfolio',
            description: 'EmpyTracky'
        },
        {
            name: 'Horiseon',
            category: 'portfolio',
            description: 'Horiseon'
        },
        {
            name: 'HyperSthetic',
            category: 'portfolio',
            description: 'HyperSthetic'
        },
        {
            name: 'Lexiconne',
            category: 'portfolio',
            description: 'Lexiconne'
        },
        {
            name: 'Notey_McTaker',
            category: 'portfolio',
            description: 'Notey_McTaker'
        }
    ]); */


    return (
        <div>
            <div className='flex-row'>
                <div>
                    <h3>RunBuddy</h3>
                    <img src='../../assets/portfolio/runBuddy.png' style={{ width: "40%" }} alt="run buddy"/>
                    <p>
                        See the <a href="https://github.com/FranklinCedar92/run-buddy">repo</a> or the <a href="https://franklincedar92.github.io/run-buddy/">page</a>.
                    </p>
                </div>   
                <div>
                    <h3>EmpyTracky</h3>
                    <img src='../../assets/portfolio/EmpyTracky.png' style={{ width: "40%" }} alt="empy tracky"/>
                    <p>
                        See the <a href="https://github.com/FranklinCedar92/EmpyTracky">repo</a>.
                    </p>
                </div>   
                <div>
                <h3>OhSnap</h3>
                    <img src='../../assets/portfolio/OhSnap.png' style={{ width: "40%" }} alt="oh snap"/>
                    <p>
                        See the <a href="https://github.com/FranklinCedar92/photo-port">repo</a> or the <a href="http://FranklinCedar92.github.io/photo-port">page</a>.
                    </p>
                </div>   
                <div>
                <h3>HyperSthetic</h3>
                    <img src='../../assets/portfolio/HyperSthetic.png' style={{ width: "40%" }} alt="hypersthetic"/>
                    <p>
                        See the <a href="https://github.com/FranklinCedar92/Hypersthetic_Franklin">repo</a> or the <a href="https://franklincedar92.github.io/Hypersthetic_Franklin/">page</a>.
                    </p>
                </div>   
                <div>
                <h3>Notey McTaker</h3>
                    <img src='../../assets/portfolio/Notey_McTaker.png' style={{ width: "40%" }} alt="run buddy"/>
                    <p>
                        See the <a href="https://github.com/FranklinCedar92/Notey_McTaker">repo</a> or the <a href="https://secure-scrubland-32243.herokuapp.com/">page</a>.
                    </p>
                </div>   
                <div>
                <h3>L'exiconne</h3>
                    <img src='../../assets/portfolio/Lexiconne.png' style={{ width: "40%" }} alt="run buddy"/>
                    <p>
                        See the <a href="https://github.com/FranklinCedar92/Lexiconne_GP2">repo</a> or the <a href="https://cryptic-chamber-15653.herokuapp.com/login">page</a>.
                    </p>
                </div>                
            </div>
        </div>
    )
}

export default PhotoList;

/*

const currentPhotos = photos.filter((photo) => photo.category === category);


{currentPhotos.map((image, i) => (
    <img 
    src={require(`../../assets/${category}/${i}.jpg`).default} 
    style={{ width: "50%" }} 
    alt={image.name} 
    className="img-thumbnail mx-1" 
    key={image.name} 
    />
))}
*/
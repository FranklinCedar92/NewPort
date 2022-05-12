import React, { useState } from 'react';

import photo from '../../assets/Marsaba.jpg';

const PhotoList = ({ category }) => {

    const [photos] = useState([
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
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
            <div className='flex-row'>
                {currentPhotos.map((image, i) => (
                    <img 
                    src={require(`../../assets/${category}/${i}.jpg`).default} 
                    style={{ width: "50%" }} 
                    alt={image.name} 
                    className="img-thumbnail mx-1" 
                    key={image.name} 
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoList;
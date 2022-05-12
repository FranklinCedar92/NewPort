import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/Marsaba.jpg";

function Projects(props) {

    const currentCategory = {
        name: "PlaceHolder",
        description:
            "Another placeholder"
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div>
                <img src={photo} alt="view of Marsaba" style={{ width: "40%" }} className="img-thumbnail mx-1" />
            </div>
        </section>
    );
}

export default Projects;
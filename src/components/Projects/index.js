import React from 'react';
import Projects from '../PhotoList';

function ProjectList(props) {

    const currentCategory = {
        name: "Projects",
        description: "Projects I've created or contributed to"
    };

    return (
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.description}</p>
            <Projects />
        </section>
    );
}

export default ProjectList;
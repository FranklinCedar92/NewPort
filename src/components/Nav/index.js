import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {

    const {
        navOptions = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    /*function categorySelected(name) {
        console.log(`${name} clicked`)
    }*/

    return (
        <header className='flex-row px-1'>
            <h2>
                <a href="/">
                    <span aria-label="myName">Franklin Cedar Brown</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className='mx-2'>
                        <a href='#about'>
                            About Me
                        </a>
                    </li>
                    <li className='mx-2'>
                        <span>Contact</span>
                    </li>
                    {navOptions.map((category) => (
                        <li className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
                        }`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category)
                            }}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {

    const {
        navOptions = [],
        setCurrentCategory,
        currentCategory,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    /*function categorySelected(name) {
        console.log(`${name} clicked`)
    }*/

    //Because there's only one other Nav option (Portfolio)
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
                        <a href='#about' onClick={() => setContactSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {navOptions.map((category) => (
                        <li className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
                        }`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
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
import React, { useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {

    const {
        navOptions = [],
        pageSelected,
        setPageSelected
    } = props;

    const [ currentCategory, setCurrentCategory] = useState(pageSelected);

    // useEffect(() => {
    //     document.title = capitalizeFirstLetter(currentCategory.name);
    // }, [currentCategory]);

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
                    {/* <li className='mx-2'>
                        <a href='#about' onClick={() => setPageSelected(about)}>
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact" onClick={() => setPageSelected(contact)}>Contact</a>
                    </li> */}
                    {navOptions.map((category,key) => (
                        <li className={`mx-2 ${
                            currentCategory.name === category.name && 'navActive'
                        }`} key={category.name}>
                            <a href={`#${category.data}`} onClick={() => {
                                setCurrentCategory(category.data);
                                setPageSelected(category.data);
                            }}>
                                {category.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;
import React, { useState } from 'react';

function Nav(props) {

    const {
        navOptions = [],
        pageSelected,
        setPageSelected
    } = props;

    const [ currentCategory, setCurrentCategory] = useState(pageSelected);

    return (
        <header className='flex-row px-1'>
            <h2>
                <a href="/">
                    <span aria-label="myName">Franklin Cedar Brown</span>
                </a>
            </h2>
            <nav>
                {/* conditionally render each category */}
                <ul className="flex-row">
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
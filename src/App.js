import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects'

function App() {

  const [navOptions] = useState([
    {
        name: "Portfolio",
        description: "Projects I've created and contributed to"
    },
    {
        name: "Contact",
        description: "Contact me!"
    },
    {
        name: "Resume",
        description: "Downloadable form available"
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(navOptions[0]);


  return (
    <div>
      <Nav
      navOptions={navOptions}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}>
      </Nav>
      <main>
        <Projects></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects'
import ContactForm from './components/Contact';

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
        <div>
          <ContactForm></ContactForm>
          <Projects currentCategory={currentCategory}></Projects>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;

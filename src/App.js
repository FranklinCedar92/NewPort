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
        name: "Resume",
        description: "Downloadable form available"
    }
  ]);

  const [contactSelected, setContactSelected] = useState(false);
  // add consts for resumeSelected and portfolioSelected to also make them appear conditionally

  const [currentCategory, setCurrentCategory] = useState(navOptions[0]);


  return (
    <div>
      <Nav
      navOptions={navOptions}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}>
      </Nav>
      <main>
        {!contactSelected ? (
          <>
            <Projects currentCategory={currentCategory}></Projects>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>

        )}
      </main>
    </div>
  );
}

export default App;

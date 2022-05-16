import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects'
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [projectsSelected, setProjectsSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  const [navOptions] = useState([
    {
        name: "Projects",
        description: "Projects I've created and contributed to"
    },
    {
        name: "Resume",
        description: "Click the image below to download my resume."
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(navOptions[0]);

  console.log(contactSelected);
  console.log(projectsSelected);
  console.log(resumeSelected);
  console.log(currentCategory);

  return (
    <div>
      <Nav
      navOptions={navOptions}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      projectsSelected={projectsSelected}
      setProjectsSelected={setProjectsSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}>
      </Nav>
      <main>
         { !contactSelected  && !projectsSelected && !resumeSelected ? (
          <>
            <Projects></Projects>
            <Resume></Resume>
            <About></About>
          </>
          ) : (
          <ContactForm></ContactForm>
          )}
          
         
        
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

/*
{ !contactSelected && !resumeSelected ? (
            <>
              <Projects></Projects>
            </>
          ) : (
            <About></About>
          )}

 <Projects currentCategory={currentCategory}></Projects>

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
*/

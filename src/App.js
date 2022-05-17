import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects'
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {

  const [pageSelected, setPageSelected] = useState("about");

  const [navOptions] = useState([
    {
      name: "About Me",
      data: 'about',
      description: ''
    },
    {
        name: "Projects",
        data: 'projects',
        description: "Projects I've created and contributed to"
    },
    {
        name: "Resume",
        data:"resume",
        description: "Click the image below to download my resume."
    },
    {
      name: "Contact",
      data: 'contact',
      description: ''
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(navOptions[0]);

  const randomFunc = () => {
    if(pageSelected === "about")
        return <About />
      else if(pageSelected === "resume")
        return <Resume />
      else if(pageSelected === "projects")
        return <Projects />
      else return <ContactForm />   
  }

  return (
    <div>
      <Nav
      navOptions={navOptions}
      pageSelected={pageSelected}
      setPageSelected={setPageSelected}
      setCurrentCategory={setCurrentCategory}
     >
      </Nav>
      <main>
       {randomFunc()}   
         
        
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

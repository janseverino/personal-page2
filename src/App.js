
import './App.css';
import React, { useEffect, useState } from "react";
import Header from './components/pageParts/header/Header';
import BoxDrawer from './components/pageParts/boxDrawer/BoxDrawer';
import SiteContext from './context/SiteContext'
import About from './components/about/About'
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/pageParts/footer/Footer';
       
const routes = [
  {  to: "intro",   desc: "Intro"},
  {  to: "about",   desc: "About me"},
  {  to: "projects",   desc: "How i code "},
  {  to: "contact",   desc: "Contact"}
]

function App() {
  
  const [showBtnDrawer, setShowBtnDrawer] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const handlerDrawer = () => {
      if (window.innerWidth <= 700) {
        setShowBtnDrawer(true);
      }
      else {
        setShowBtnDrawer(false);
        setShowDrawer(false)
      }
  }

  const handlerOpenDrawer = () => setShowDrawer(!showDrawer)

  useEffect(() => {
      handlerDrawer();
      window.addEventListener("resize", handlerDrawer)
  });

  return (
    <SiteContext.Provider value={{routes: routes}} >
      <div className="App">   
        <Header openCloseDrawer={handlerOpenDrawer} showBtnDrawer={showBtnDrawer}/>

        <BoxDrawer 
         openDrawer={handlerOpenDrawer} 
         showDrawer={showDrawer}  />
    
      </div>

      <div>
        <Intro />
        <About />
        <Projects />
        <Contact />
        <Footer />

      </div>


    </ SiteContext.Provider>
  );
}

export default App;


import './App.css';
import React, { useEffect, useState } from "react";
import Header from './components/pageParts/header/Header';
import BoxDrawer from './components/pageParts/boxDrawer/BoxDrawer';
import SiteContext from './context/SiteContext'
       
const routes = [
  {  to: "home",   desc: "Home"},
  {  to: "about",   desc: "About me"},
  {  to: "code",   desc: "How i code "},
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
      <div className="App-section2"></div>
      <div className="App-section3"></div>

    </ SiteContext.Provider>
  );
}

export default App;

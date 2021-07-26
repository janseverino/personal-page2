import React, { useEffect, useState } from "react";
// import About from "../about/About";
import Header from '../pageParts/header/Header';
import BoxDrawer from '../pageParts/boxDrawer/BoxDrawer';
import SiteContext from '../../context/SiteContext'
import About from '../about/About'
import Intro from '../intro/Intro';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Footer from '../pageParts/footer/Footer';


const routes = [
    { to: "intro", desc: "Intro" },
    { to: "about", desc: "About me" },
    { to: "projects", desc: "How i code " },
    { to: "contact", desc: "Contact" }
]


export default function Main() {

    return (
        // <SiteContext.Provider value={{ routes: routes }} >
        //     <div className="App">
        //         <Header openCloseDrawer={handlerOpenDrawer} showBtnDrawer={showBtnDrawer} />

        //         <BoxDrawer
        //             openDrawer={handlerOpenDrawer}
        //             showDrawer={showDrawer} />

        //     </div>

        <div>
            <Intro />
            <About />
            <Projects />
            <Contact />
            <Footer />

        </div>
        /* {
        
                </ SiteContext.Provider> }*/
    )
}
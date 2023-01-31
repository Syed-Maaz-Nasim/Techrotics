import HeroSection from "./components/HeroSection";
import NavbarMaaz from "./components/Navbar";
import React, { useState } from 'react'
import { BrowserRouter as Router , Routes , Route , Link } from "react-router-dom";
import ApplyNow from "./components/ApplyNow";
import About from "./components/About";
import DiplomaT from "./components/DiplomaT";
import DiplomaCards from "./components/DiplomaCards";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Payment from "./components/Payment";
import Moneybutton from "./components/Moneybutton";

function App() {
  return (
    <>
    <Router>
				<Routes>
					<Route path="/" element={
						<>
            <NavbarMaaz />
            <HeroSection />
            <Slider/>
           
            <About />
            <Footer/>
						</>
					}/>
					<Route path="/diplomaT" element={
            <>
            <NavbarMaaz/>
						<DiplomaT/>
            <DiplomaCards/>
            <Footer/>
						</>
          }/>
					<Route path="/applynow" element={
            <>
            <NavbarMaaz/>
            <ApplyNow/>
            <Moneybutton/>
            <Footer/>
						</>
          }/>
          <Route path="/getdetails" element={
            <>
            <NavbarMaaz/>
            <Payment/>
            <Footer/>
						</>
          }/>
					
				</Routes>
			</Router>
           
      
    </>
    
  );
}

export default App;

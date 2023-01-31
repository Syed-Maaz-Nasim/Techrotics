import React from 'react'
import EC from "./components/EC";
import HeroSection from "./components/HeroSection";
import NavbarMaaz from "./components/Navbar";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import EC1 from "./components/EC1";
import About from "./components/About";

const Home = () => {
  return (
   <>
      <NavbarMaaz/>
      <HeroSection/>
      <About></About>
   </>
  )
}

export default Home

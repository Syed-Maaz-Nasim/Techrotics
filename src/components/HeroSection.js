import React from "react";
import logo from "../assets/logo.png";
import "./styles.css";
import Cards from "./Cards";
import cardsapi from "../api/cardsapi";
// import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const changeonclick = () => {
  // <Route path = "/diplomaT" element = {<DiplomaT/>} />
  <Link to="/diplomaT" className="navigation"></Link>

}

const HeroSection = () => {

  let navigateToDiplomaT = useNavigate()


  return (
    <div className="row hero-section">
      <div className="container">
        <div className="col-8" style={{ textAlign: "center", marginTop:"20px"}}>
          <img style={{ marginBottom: "10px", height: "140px", alignItems:'center', marginLeft:'64px'}} src={logo} alt="logo" />
          <h3 className="title">
          Become financially independent with an Ecommerce Amazon business.
          </h3>
          <h1 className="diploma">
          Amazon Fba wholesale Track  <span>2023</span>
          </h1>
        </div>
        <div className="col-8">
          <div className="row cardsrow">
            {cardsapi.map((val) => {
              return (
                <Cards
                  key={val.id}
                  text1={val.text1}
                  text2={val.text2}
                  imgsrc={val.imgsrc}
                />
              );
            })}
          </div>
        </div>
        <div className="col-8" style={{ textAlign: "center", margin: "60px 0 20px 0" }}>
          {/* <Link to="/diplomaT" className="btn">Enroll Now</Link> */}

          {/* <button className="btn" onClick={changeonclick}>
            Enroll Now</button>{' '} */}
          <button
            className="btn" onClick={() => {
              navigateToDiplomaT("/diplomaT");
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

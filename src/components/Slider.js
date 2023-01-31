import React from "react";
import "./Slider.css";
import slider1 from "../Website_images/slider1.jpg"
import slider2 from "../Website_images/slider2.jpg"
import slider3 from "../Website_images/slider3.jpg"

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
/>;

const Slider = () => {
  return (
    <>

      <div classNameName="main-container aem-GridColumn aem-GridColumn--default--12">
        <div
          classNameName="key-feature-tab"
          style={{ paddingTop: "40px", paddingBottom: "28px" }}
        >
          <div classNameName="key-feature-tab__contents ">
            <div
              classNameName="key-feature-tab__header-wrap"
              style={{ justifyContent: "center", alignContent: "center" }}
            >
              <h1
                classNameName="key-feature-tab__tittle"
                style={{
                  paddingLeft: "500px",
                  color: "#000000",
                  fontSize: "45px",
                  // fontSize: "5.9vw",
                  fontFamily: "corbel"
                }}
              >
                Amazon Learing Initiative By
              </h1>
              <div classNameName="tab">
                <h1 classNameName="learnt" style={{ paddingLeft: "600px" }}>
                  The Techroctics Lab
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      


      <div className="container-fluid">         
      <div id="carouselExampleIndicators" className="carousel slide container-fluid">
        <div className="carousel-indicators ">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div> 
    </>
  );
};

export default Slider;

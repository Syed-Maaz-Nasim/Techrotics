import React from "react";
import "./About.css"
import irfan from "../Images_for_website/irfan.png"

const About = () => {
  return (
    <>
      <div className="container myclass" style={{ paddingTop: '120px', marginBottom: "50px" }}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 abt-left aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1000">
            <h2 className="heading" style={{ paddingLeft: "17px" }} >
              About <b> The Techroctics Lab</b>
            </h2>
            <br />
            <p className="text" style={{ paddingLeft: "17px" }}>
              Techrotics Lab was established in 2019 with the goal of assisting professionals and students in learning skills that would enable them to begin earning money.
              Our aim is to earn money in several currencies. We instruct professionals on how to make money in <b >Dollars</b> and <b >Pounds</b>. 
              <b> Amazon FBA wholesale, Virtual Assistant, and Amazon FBA Private Label </b> courses are available in <b >TECHROTICS LAB</b>. Every two months, each course starts.
              20 batches of Amazon business students have successfully graduated from Techrotics thus far; several of them have opened their own stores and begun making money in <b >Dollars </b>
              and <b> Pounds.</b>
            </p>
            <br />
            {/* <a href="" className="btn btn-primary mx-3"   >
              Learn More
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ms-2 mb-1"
              >
                <path
                  d="M7.97199 6.79277C6.38383 6.79277 4.89608 6.79277 3.40832 6.79277C-0.662473 6.79277 5.97719 6.79277 1.9064 6.79277C1.72385 6.79277 1.5413 6.78412 1.36788 6.74088C0.911515 6.6371 0.637695 6.29116 0.637695 5.8674C0.637695 5.44363 0.911515 5.0804 1.36788 4.98527C1.63258 4.93338 1.9064 4.93338 2.18022 4.93338C7.50145 4.93338 2.10311 4.93338 7.42435 4.93338C7.57039 4.93338 7.72555 4.93338 7.95373 4.93338C7.81682 4.78636 7.74381 4.69122 7.65253 4.61339C6.73067 3.73991 5.79968 2.86642 4.87782 1.99294C4.42145 1.56053 4.39407 0.998385 4.79567 0.60921C5.2064 0.211387 5.79055 0.228683 6.24692 0.669748C7.79857 2.13132 9.35022 3.60153 10.8927 5.07175C11.486 5.63389 11.486 6.10955 10.8927 6.68034C9.35934 8.14191 7.82595 9.59483 6.28343 11.0564C5.79968 11.5148 5.21553 11.5407 4.79567 11.1429C4.38494 10.7537 4.43058 10.2002 4.91433 9.7332C5.90921 8.76459 6.90409 7.81327 7.97199 6.79277Z"
                  fill="white"
                ></path>
              </svg>
            </a> */}
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <img
              className="aos-init aos-animate"
              data-src="Pic23"
              width="450"
              height="450"
              alt=""
              data-aos="zoom-in"
              data-aos-duration="1000"
              src={irfan}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
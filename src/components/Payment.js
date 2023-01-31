import React from "react";
import "./Payment.css";
import easypaisa from "../Images_for_website/easypaisa.png";
import meezanbank from "../Images_for_website/meezanbank.png";
import jazzcash from "../Images_for_website/jazzcash.png";
const Payment = () => {
  return (
    <>
      <section className="main text-light p-5 p-lg-0 pt-lg-4 text-center text-md-start">
        <div className="d-lg-flex align-items-center justify-content-between">
          <div className="da-container mx-5">
            <h2>
              <b>Payment Via</b>
              <span className="wrote">
                <b>  Easypaisa</b>
              </span>
            </h2>
            <p className="easypaisatext my-4">
              We focus on teaching our students the fundamentals of the latest{" "}
              <br />
              and greatest technologies to prepare them for their first dev role{" "}
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsambr{" "}
              <br />
              doloremque voluptatum atque facere, non facilis? Ullam, architecto
              atque?.
            </p>
            <h2 className="phonenum">033302242289</h2>
          </div>
          <img className="easypaisaimg image-fluid " src={easypaisa} alt="" />
        </div>
      </section>

      {/* //Bank */}
      <section className="main2 text-light p-5 p-lg-0 pt-lg-4 text-center text-md-start">
        <div className="d-lg-flex align-items-center justify-content-between">
          <div className="ba-container mx-5">
            <h2>
              <b>Payment Via</b>
              <span className="likh">
                <b>  Bank</b>
              </span>
            </h2>
            <p className="banktext my-4">
              We focus on teaching our students the fundamentals of the latest{" "}
              <br />
              and greatest technologies to prepare them for their first dev role{" "}
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsambr{" "}
              <br />
              doloremque voluptatum atque facere, non facilis? Ullam, architecto
              atque?.
            </p>
            <h2 className="phonenumal">033302242289</h2>
          </div>
          <img className="meezanbankimg image-fluid " src={meezanbank} alt="" />
        </div>
      </section>

      {/* Jazz Cash */}
      <section className="main3 text-light p-5 p-lg-0 pt-lg-4 text-center text-md-start">
        <div className="d-lg-flex align-items-center justify-content-between">
          <div className="za-container mx-5">
            <h2>
              <b>Payment Via</b>
              <span className="likhen">
                <b> Jazz Cash</b>
              </span>
            </h2>
            <p className="jazzcashtext my-4">
              We focus on teaching our students the fundamentals of the latest{" "}
              <br />
              and greatest technologies to prepare them for their first dev role{" "}
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsambr{" "}
              <br />
              doloremque voluptatum atque facere, non facilis? Ullam, architecto
              atque?.
            </p>
            <h2 className="phonenumaly">033302242289</h2>
          </div>
          <img className="jazzcashimg image-fluid " src={jazzcash} alt="" />
        </div>
      </section>
    </>
  );
};

export default Payment;
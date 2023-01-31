import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const changeonclick = () => {
    // <Route path = "/getdetails" element = {<Payment/>} />
    <Link to="/getdetails" className="navigation"></Link>
  
  }
  
const Moneybutton = () => {
    let navigateToPayment = useNavigate()
      
  return (
    <>
      <div className="moneybutton" style={{paddingLeft:"350px"}}  onClick={() =>{navigateToPayment("/getdetails")}}>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="mon btn-primary" type="button">
            Payment Plan
          </button>
        </div>
      </div>
    </>
  );
};

export default Moneybutton;

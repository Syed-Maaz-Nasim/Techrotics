import React from 'react'
import "./DiplomaCards.css"
import DiplomaCardsArray from './DiplomaCardsArray'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

import course1 from "../Website_images/course1.jpg"
import course2 from "../Website_images/course2.jpg"
import course3 from "../Website_images/course3.jpg"




const DiplomaCards = () => {

    let navigateToApplyNow = useNavigate()
    const navigate = useNavigate();
    return (
        <>
        <div>
            
        </div>
            <div className="courses_bg" >
                <h2 className="text-center" >
                    Courses Offered In
                </h2>
                <br />
                <div className="courses_boxes container dt_cards_3">
                    <div className="row  ">
                        {DiplomaCardsArray.map((val,key) => {
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="card all_cards" >
                                        <div className="img">
                                            <img src={val.imgsrc} alt="" />
                                        </div>
                                        <div className="txt">
                                            <h2>{val.title}</h2>
                                            <h3>{val.duration}</h3>
                                            <div className="col mode">
                                                <img src="https://ec.com.pk/assets/img/benefit_3_blue.svg" alt="" />
                                                <div>
                                                    <h4>Mode of Training</h4>
                                                    <p> Online/Onsite</p>
                                                </div>
                                            </div>
                                            <p>{val.text}</p>
                                            <div className="cta-group">

                                                <a className="btn btn-primary" style={{ width: "68%" }}>
                                                    <span className='mx-3' href="./applyNow.js"
                                                     onClick={() => {
                                                        navigate('/applynow',{state:{id:1,name:'sabaoon',key:key}});
                                                    }} >Apply Now  </span>
                                                    <img src="https://ec.com.pk/assets/img/arrow-2.svg" alt="" />
                                                </a>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                            );
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default DiplomaCards;

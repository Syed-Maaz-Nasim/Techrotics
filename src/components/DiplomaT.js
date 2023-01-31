import React from "react";
import "./DiplomaT.css"
import diploma_track from "../Images_for_website/diploma_track.png"


const DiplomaT = () => {
    return (
        <>
            <div className="hero_bt3" style={{ marginTop: "40px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" >
                            <div className="next">
                                <h1 className="write">
                                    Amazon FBA Wholesale Track
                                </h1>
                                <h3 className="writing">
                                    By Techroctics Lab
                                </h3>
                                <p className="type_1" >

                                    Every month, batches of Amazon fba wholesale begin in the Techrotics Lab.

                                    The Amazon FBA wholesale business model allows you to buy goods in bulk from a manufacturer at a reduced price and resale them on Amazon.

                                    20 batches of Amazon FBA wholesale have successfully graduated from Techrotics Lab during the previous six months. Few launched their own businesses,
                                    and even fewer now work with clients from the US and UK to provide services to various foreign clients.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6" >
                            <img src={diploma_track} alt="" className="hello" />
                            {/* <div className="owl-carousel service_slider owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                            <div className="owl-stage">
                                <div className="owl-item cloned">
                                    <div className="item">
                                        <img src="https://ec.com.pk/assets/img/hero-diploma.png" alt=""/>
                                    </div>
                                </div>
                                <div className="owl-item cloned">
                                    <div className="item">
                                        <img src="https://ec.com.pk/assets/img/hero-diploma.png" alt=""/>
                                    </div>
                                </div>
                                <div className="owl-item active">
                                    <div className="item">
                                        <img src="https://ec.com.pk/assets/img/hero-diploma.png" alt=""/>
                                    </div>
                                </div>
                                <div className="owl-item cloned">
                                    <div className="item">
                                        <img src="https://ec.com.pk/assets/img/hero-diploma.png" alt=""/>
                                    </div>
                                </div>
                                <div className="owl-item cloned">
                                    <div className="item">
                                        <img src="https://ec.com.pk/assets/img/hero-diploma.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-nav disabled">
                            <button type="button" role="presentation" className="owl-prev">
                                <div className="nav-btn prev-slide"></div>
                            </button>
                            <button type="button" role="presentation" className="owl-next">
                                <div className="nav-btn next-slide"></div>
                            </button>
                        </div>
                        <div className="owl-dots disabled">
                            <button role="button" className="owl-dot active">
                                <span></span>
                            </button>
                        </div>
                    </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero_bt3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="do">Extensive Training
                                <br />Programs</h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="work">A separate Trainer is assigned to each module.

                                All instructors will provide you with hands-on instruction and cover all necessary theoretical and technical material to understand Amazon.

                                Every Saturday and Monday, there are two new batches that begin.

                                Students can attend from home if that is more comfortable for them. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DiplomaT;
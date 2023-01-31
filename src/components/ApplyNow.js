import React from "react";
// import ApplyNowArray from "./ApplyNowArray";
import styles from "./ApplyNow.module.css";
import { useLocation } from "react-router-dom";

const ApplyNow = ({ data }) => {
  const location = useLocation();
  const cardState = location.state.key;
  console.log("card", cardState);

  if (cardState == "0") {
    return (
      <>
        <div></div>
        <div className={styles.hero_benefits}>
          <div className={styles.content_row} row flex no-flex-sm>
            <div className={styles.content} col-lg-7>
              <h1>About Card 1</h1>
              <div className={styles.duration} row>
                <div className={styles.img_user} col>
                  <img
                    // src="https://tinyjpg.com/images/social/website.jpg"
                    alt=""
                    className={styles.click}
                  />
                  <div>
                    <h3 style={{ marginLeft: "-70px", marginTop: "18px" }}>
                    Freelancing
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sticky_wrapper} row>
          <div className={styles.sticky_cont} col-lg-8>
            <div className={styles.bnf_desc} id="about_course">
              <div className="container">
                <div className={styles.row}>
                  <div className={styles.content_center} col-12>
                    <h2 style={{ paddingTop: "40px" }}>Program Overview</h2>
                    <p className={styles.paragraph}>
                      Set up & design your store by understanding and
                      implementing the processes involved in running a business
                      on Shopify. You will learn about essential aspects of
                      running the business from live examples and case studies
                      and adopt a realistic approach towards scaling past seven
                      figures. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Excepturi ab voluptatibus accusantium
                      cum ullam deleniti!
                    </p>
                    <br />
                    <h2>Learning Objectives</h2>
                    <p className={styles.paragraph2}>
                      This program will help students build their own Shopify
                      Dropshipping Store. Equipped with the right marketing
                      strategies and the art of Dropshipping, Students will be
                      able to develop their profitable Dropshipping stores and
                      help clients launch and scale their businesses on Shopify.
                      Furthermore, Virtual Assistants can sell their services
                      online as this course will provide them with multiple
                      subset skills, valued very high on the freelancing market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" style={{ marginBottom: "50px" }}>
              <div className={styles.content_center} col-12>
                <h1 className="sky" style={{ paddingTop: "20px" }}>
                  Coming from Card 1
                </h1>
                <h2>Course Outline</h2>
              </div>
              <br />
              <div
                className="default_accord ec-faqs-section"
                id="trainings-faqs"
              >
                <div
                  className="row justify-content-start aos-init aos-animate"
                  data-aos="zoom-in"
                  id="accordion"
                >
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classNamees that we use to style each
                          element. These classNamees control the overall
                          appearance, as well as the showing and hiding via CSS
                          transitions. You can modify any of this with custom
                          CSS or overriding our default variables. It's also
                          worth noting that just about any HTML can go within
                          the <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Accordion Item #2
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the second item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Accordion Item #3
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the third item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (cardState == "1") {
    return (
      <>
        <div className={styles.hero_benefits}>
          <div className={styles.content_row} row flex no-flex-sm>
            <div className={styles.content} col-lg-7>
              <h1>About Card 2</h1>
              <div className={styles.duration} row>
                <div className={styles.img_user} col>
                  <img
                    // src="https://tinyjpg.com/images/social/website.jpg"
                    alt=""
                    className={styles.click}
                  />
                  <div>
                    <h3 style={{ marginLeft: "-70px", marginTop: "18px" }}>
                    Shopify DS
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sticky_wrapper} row>
          <div className={styles.sticky_cont} col-lg-8>
            <div className={styles.bnf_desc} id="about_course">
              <div className="container">
                <div className={styles.row}>
                  <div className={styles.content_center} col-12>
                    <h2 style={{ paddingTop: "40px" }}>Program Overview</h2>
                    <p className={styles.paragraph}>
                      Set up & design your store by understanding and
                      implementing the processes involved in running a business
                      on Shopify. You will learn about essential aspects of
                      running the business from live examples and case studies
                      and adopt a realistic approach towards scaling past seven
                      figures. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Excepturi ab voluptatibus accusantium
                      cum ullam deleniti!
                    </p>
                    <br />
                    <h2>Learning Objectives</h2>
                    <p className={styles.paragraph2}>
                      This program will help students build their own Shopify
                      Dropshipping Store. Equipped with the right marketing
                      strategies and the art of Dropshipping, Students will be
                      able to develop their profitable Dropshipping stores and
                      help clients launch and scale their businesses on Shopify.
                      Furthermore, Virtual Assistants can sell their services
                      online as this course will provide them with multiple
                      subset skills, valued very high on the freelancing market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" style={{ marginBottom: "50px" }}>
              <div className={styles.content_center} col-12>
                <h1 className="sky" style={{ paddingTop: "20px" }}>
                  Coming from Card 2
                </h1>
                <h2>Course Outline</h2>
              </div>
              <br />
              <div
                className="default_accord ec-faqs-section"
                id="trainings-faqs"
              >
                <div
                  className="row justify-content-start aos-init aos-animate"
                  data-aos="zoom-in"
                  id="accordion"
                >
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classNamees that we use to style each
                          element. These classNamees control the overall
                          appearance, as well as the showing and hiding via CSS
                          transitions. You can modify any of this with custom
                          CSS or overriding our default variables. It's also
                          worth noting that just about any HTML can go within
                          the <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Accordion Item #2
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the second item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Accordion Item #3
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the third item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.hero_benefits}>
          <div className={styles.content_row} row flex no-flex-sm>
            <div className={styles.content} col-lg-7>
              <h1>About Card 3</h1>
              <div className={styles.duration} row>
                <div className={styles.img_user} col>
                  <img
                    // src="https://tinyjpg.com/images/social/website.jpg"
                    alt=""
                    className={styles.click}
                  />
                 <div>
                    <h3 style={{ marginLeft: "-70px", marginTop: "18px" }}>
                    FBA Wholesale
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sticky_wrapper} row>
          <div className={styles.sticky_cont} col-lg-8>
            <div className={styles.bnf_desc} id="about_course">
              <div className="container">
                <div className={styles.row}>
                  <div className={styles.content_center} col-12>
                    <h2 style={{ paddingTop: "40px" }}>Program Overview</h2>
                    <p className={styles.paragraph}>
                      Set up & design your store by understanding and
                      implementing the processes involved in running a business
                      on Shopify. You will learn about essential aspects of
                      running the business from live examples and case studies
                      and adopt a realistic approach towards scaling past seven
                      figures. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Excepturi ab voluptatibus accusantium
                      cum ullam deleniti!
                    </p>
                    <br />
                    <h2>Learning Objectives</h2>
                    <p className={styles.paragraph2}>
                      This program will help students build their own Shopify
                      Dropshipping Store. Equipped with the right marketing
                      strategies and the art of Dropshipping, Students will be
                      able to develop their profitable Dropshipping stores and
                      help clients launch and scale their businesses on Shopify.
                      Furthermore, Virtual Assistants can sell their services
                      online as this course will provide them with multiple
                      subset skills, valued very high on the freelancing market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" style={{ marginBottom: "50px" }}>
              <div className={styles.content_center} col-12>
                <h1 className="sky" style={{ paddingTop: "20px" }}>
                  Coming from Card 3
                </h1>
                <h2>Course Outline</h2>
              </div>
              <br />
              <div
                className="default_accord ec-faqs-section"
                id="trainings-faqs"
              >
                <div
                  className="row justify-content-start aos-init aos-animate"
                  data-aos="zoom-in"
                  id="accordion"
                >
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classNamees that we use to style each
                          element. These classNamees control the overall
                          appearance, as well as the showing and hiding via CSS
                          transitions. You can modify any of this with custom
                          CSS or overriding our default variables. It's also
                          worth noting that just about any HTML can go within
                          the <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Accordion Item #2
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the second item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Accordion Item #3
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the third item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ApplyNow;

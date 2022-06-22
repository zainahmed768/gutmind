import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/about.css";

const About = () => {
  return (
    <>
      <Header />
      {/* about sec starts here */}
      <section className="about-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-11">
              <div className="content-wrapper">
                <h2>About GutMind</h2>
                <h4>what we do</h4>
                <p>- GutMind is a healthtech company.</p>
                <p>
                  - We use proprietary AI tools to discover novel botanical
                  functional ingredients which offer targeted physical and
                  mental health benefits.
                </p>
                <p>
                  - At GutMind, we strongly believe in fully controlling the
                  product story and positioning to maximize our impact potential
                </p>
                <p>
                  - GutMind’s consumer-facing business units incorporate our
                  novel botanical functional ingredients in EVERYDAY food
                  products people already eat, so we don't need to ask people to
                  change their dietary habits, thereby making a BIG IMPACT on
                  global mental-health, health and climate* crisis.
                </p>
              </div>
              <div className="content-wrapper pt-5 pb-3">
                <h2>
                  Our Culture: Mission Oriented, United By Our Values, And
                  Committed To:
                </h2>
                <p>- Do things differently than others to win.</p>
                <p>
                  - Embrace risk in order to enable breakthrough innovation and
                  meaningful contribution and impact.
                </p>
                <p>
                  - Solve complex problems by creating thoughtful solution
                  frameworks and to be persistent to minimize the solution space
                  by refining the frameworks.
                </p>
              </div>
              <div className="content-wrapper">
                <div className="vi-con">
                  <h4>Our Vision :</h4>
                  <p>
                    To be the leading innovator of business model and food
                    solutions for physical and mental health.
                  </p>
                </div>
                <div className="vi-con">
                  <h4>Our Mission :</h4>
                  <p>
                    To build the world’s most sophisticated solution platform
                    linking food, to healthy microbiota, to physical and mental
                    health.
                  </p>
                </div>
                <div className="vi-con">
                  <h4>Our Purpose :</h4>
                  <p>
                    To realize the vision of health through food
                    unapologetically.
                  </p>
                </div>
                <div className="vi-con">
                  <h4>Our Values:</h4>
                  <p>
                    To do good by being good and professional and having a
                    contribution mindset
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h2>Key Components Of Our Strategy To Win</h2>
                <div className="northen-wrapper">
                  <h2>Our Northstar</h2>
                  <h3>Great Tasting Products That Make You Healthy</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-lg-2">
              <div className="box-wrapper">
                <div className="box-content-wrapper">
                  <h4>Our Mission Values & Culture </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box-wrapper">
                <div className="box-content-wrapper">
                  <h4>Our Innovation Philosophy</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box-wrapper">
                <div className="box-content-wrapper">
                  <h4>Our Innovation Philosophy</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-wrapper">
                <div className="box-content-wrapper">
                  <h4>Our marketing strategy</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-lg-2"></div>
            <div className="col-lg-4">
              <div className="box-wrapper light-pink">
                <div className="box-content-wrapper">
                  <h4>Our Gut Operating System Platform</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box-wrapper light-pink">
                <div className="box-content-wrapper">
                  <h4>Our Product Design Priorities</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box-wrapper light-pink">
                <div className="box-content-wrapper">
                  <h4>Our Formulations & Brands</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box-wrapper light-pink">
                <div className="box-content-wrapper">
                  <h4>Unique Targeting & Positioning, & GTM</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about sec ends here */}
      <Footer />
    </>
  );
};

export default About;

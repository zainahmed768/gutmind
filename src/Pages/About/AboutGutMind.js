import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
const AboutGutMind = () => {
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
                <h4>GutMind is a healthtech company.</h4>
                <p>
                  Our culture: mission oriented, united by our values, and
                  committed to: <br /> Do things differently than others to win
                  Embrace risk in order to enable breakthrough innovation and
                  meaningful contribution and impact
                </p>
                <p>
                  Solve complex problems by creating thoughtful solution
                  frameworks and to be persistent to minimize the solution space
                  by refining the frameworks
                </p>
                <p>
                  Our vision is to be the leading innovator of business model
                  and food solutions for physical and mental health.
                </p>
                <p>
                  Our mission is to build the world’s most sophisticated
                  solution platform linking food, to healthy microbiota, to
                  physical and mental health.
                </p>
                <p>
                  Our purpose is to realize the vision of health through food.
                  unapologetically
                </p>
                <p>
                  Our values is to do good by being good and professional and
                  having a contribution mindset.
                </p>
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

export default AboutGutMind;

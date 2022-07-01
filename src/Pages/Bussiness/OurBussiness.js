import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/bussiness.css";
import { main_circle } from "../../constant";

const OurBussiness = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);
  const [isHovering6, setIsHovering6] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };
  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };
  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };
  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };
  const handleMouseOver4 = () => {
    setIsHovering4(true);
  };
  const handleMouseOut4 = () => {
    setIsHovering4(false);
  };
  const handleMouseOver5 = () => {
    setIsHovering5(true);
  };
  const handleMouseOut5 = () => {
    setIsHovering5(false);
  };
  const handleMouseOver6 = () => {
    setIsHovering6(true);
  };
  const handleMouseOut6 = () => {
    setIsHovering6(false);
  };
  return (
    <>
      <Header />
      {/* Bussiness sec starts here */}
      <section className="bussiness-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <h2>Our Business and Markets</h2>
              </div>
            </div>
            <div className="col-lg-6 mt-5">
              <div className="more-chart-text">
                <a href="">click on each BU to learn more</a>
              </div>
              <div className="cirle-wrapper mt-5">
                <div
                  className="Performsnce side-circle-wrapper"
                  onMouseEnter={handleMouseOver}
                  onMouseLeave={handleMouseOut}
                >
                  <a href="https://mojudrinks.com/" target="blank">
                    <h5>
                      Performsnce <br /> Beverages <br /> BU
                    </h5>
                  </a>
                </div>
                <div
                  className="Therapeutics side-circle-wrapper"
                  onMouseOver={handleMouseOver2}
                  onMouseOut={handleMouseOut2}
                >
                  <h5>
                    Therapeutics <br /> BU
                  </h5>
                </div>
                <div
                  className="Therapes side-circle-wrapper"
                  onMouseOver={handleMouseOver3}
                  onMouseOut={handleMouseOut3}
                >
                  <h5>
                    Therapeutics <br /> BU
                  </h5>
                </div>
                <div
                  className="Medical side-circle-wrapper"
                  onMouseOver={handleMouseOver4}
                  onMouseOut={handleMouseOut4}
                >
                  <h5>
                    Medical <br /> Foods <br /> BU
                  </h5>
                </div>
                <div
                  className="Cosmetics side-circle-wrapper"
                  onMouseOver={handleMouseOver5}
                  onMouseOut={handleMouseOut5}
                >
                  <h5>
                    Cosmetics <br /> BU
                  </h5>
                </div>
                <div
                  className="Alternative side-circle-wrapper"
                  onMouseOver={handleMouseOver6}
                  onMouseOut={handleMouseOut6}
                >
                  <a href="https://www.denovofoods.com.au/" target="blank">
                    <h5>
                      Alternative <br /> Meats <br /> BU
                    </h5>
                  </a>
                </div>
                <div className="main-cirlce-wrapper">
                  <div className="main-circle-img-wrapper">
                    <figure>
                      <img src={main_circle} />
                    </figure>
                  </div>
                  <div className="main-circle-content-wrapper">
                    <h4>Gutmind</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {isHovering && (
                <div
                  className="performance-content-wrapper side-contect"
                  style={{ opacity: 1 }}
                >
                  <p>
                    Feugiat scelerisque varius morbi enim nunc faucibus a.
                    Aliquam malesuada bibendum arcu vitae elementum curabitur
                    vitae nunc. Aliquam id diam maecenas ultricies mi eget. Dui
                    ut ornare lectus sit amet est placerat in. Eget felis eget
                    nunc lobortis.
                  </p>
                  <p>
                    Et netus et malesuada fames. Aenean vel elit scelerisque
                    mauris pellentesque pulvinar. Sagittis nisl rhoncus mattis
                    rhoncus urna neque viverra justo.
                  </p>
                  <p>
                    A cras semper auctor neque vitae tempus quam. Senectus et
                    netus et malesuada fames. Id velit ut tortor pretium viverra
                    suspendisse potenti nullam.
                  </p>
                </div>
              )}
              {isHovering2 && (
                <div
                  className="Therapeutics-content-wrapper side-contect"
                  style={{ opacity: 1 }}
                >
                  <p>
                    Feugiat scelerisque varius morbi enim nunc faucibus a.
                    Aliquam malesuada bibendum arcu vitae elementum curabitur
                    vitae nunc. Aliquam id diam maecenas ultricies mi eget. Dui
                    ut ornare lectus sit amet est placerat in. Eget felis eget
                    nunc lobortis.
                  </p>
                  <p>
                    Et netus et malesuada fames. Aenean vel elit scelerisque
                    mauris pellentesque pulvinar. Sagittis nisl rhoncus mattis
                    rhoncus urna neque viverra justo.
                  </p>
                  <p>
                    A cras semper auctor neque vitae tempus quam. Senectus et
                    netus et malesuada fames. Id velit ut tortor pretium viverra
                    suspendisse potenti nullam.
                  </p>
                </div>
              )}
              {isHovering3 && (
                <div
                  className="Therapes-content-wrapper side-contect"
                  style={{ opacity: 1 }}
                >
                  <p>
                    Feugiat scelerisque varius morbi enim nunc faucibus a.
                    Aliquam malesuada bibendum arcu vitae elementum curabitur
                    vitae nunc. Aliquam id diam maecenas ultricies mi eget. Dui
                    ut ornare lectus sit amet est placerat in. Eget felis eget
                    nunc lobortis.
                  </p>
                  <p>
                    Et netus et malesuada fames. Aenean vel elit scelerisque
                    mauris pellentesque pulvinar. Sagittis nisl rhoncus mattis
                    rhoncus urna neque viverra justo.
                  </p>
                  <p>
                    A cras semper auctor neque vitae tempus quam. Senectus et
                    netus et malesuada fames. Id velit ut tortor pretium viverra
                    suspendisse potenti nullam.
                  </p>
                </div>
              )}
              {isHovering4 && (
                <div
                  className="Medical-content-wrapper side-contect"
                  style={{ opacity: 1 }}
                >
                  <p>
                    Feugiat scelerisque varius morbi enim nunc faucibus a.
                    Aliquam malesuada bibendum arcu vitae elementum curabitur
                    vitae nunc. Aliquam id diam maecenas ultricies mi eget. Dui
                    ut ornare lectus sit amet est placerat in. Eget felis eget
                    nunc lobortis.
                  </p>
                  <p>
                    Et netus et malesuada fames. Aenean vel elit scelerisque
                    mauris pellentesque pulvinar. Sagittis nisl rhoncus mattis
                    rhoncus urna neque viverra justo.
                  </p>
                  <p>
                    A cras semper auctor neque vitae tempus quam. Senectus et
                    netus et malesuada fames. Id velit ut tortor pretium viverra
                    suspendisse potenti nullam.
                  </p>
                </div>
              )}
              {isHovering5 && (
                <div
                  className="Cosmetics-content-wrapper side-contect"
                  style={{ opacity: 1 }}
                >
                  <p>
                    Feugiat scelerisque varius morbi enim nunc faucibus a.
                    Aliquam malesuada bibendum arcu vitae elementum curabitur
                    vitae nunc. Aliquam id diam maecenas ultricies mi eget. Dui
                    ut ornare lectus sit amet est placerat in. Eget felis eget
                    nunc lobortis.
                  </p>
                  <p>
                    Et netus et malesuada fames. Aenean vel elit scelerisque
                    mauris pellentesque pulvinar. Sagittis nisl rhoncus mattis
                    rhoncus urna neque viverra justo.
                  </p>
                  <p>
                    A cras semper auctor neque vitae tempus quam. Senectus et
                    netus et malesuada fames. Id velit ut tortor pretium viverra
                    suspendisse potenti nullam.
                  </p>
                </div>
              )}
              {isHovering6 && (
                <div
                  className="Alternative-content-wrapper side-contect"
                  style={{ opacity: 1 }}
                >
                  <p>
                    Feugiat scelerisque varius morbi enim nunc faucibus a.
                    Aliquam malesuada bibendum arcu vitae elementum curabitur
                    vitae nunc. Aliquam id diam maecenas ultricies mi eget. Dui
                    ut ornare lectus sit amet est placerat in. Eget felis eget
                    nunc lobortis.
                  </p>
                  <p>
                    Et netus et malesuada fames. Aenean vel elit scelerisque
                    mauris pellentesque pulvinar. Sagittis nisl rhoncus mattis
                    rhoncus urna neque viverra justo.
                  </p>
                  <p>
                    A cras semper auctor neque vitae tempus quam. Senectus et
                    netus et malesuada fames. Id velit ut tortor pretium viverra
                    suspendisse potenti nullam.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="row sdd">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="scrol">
                <p>scroll over each BU to learn more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bussiness sec ends here */}
      {/* Scroll sec starts here */}
      <section className="scroll">
        <div className="container"></div>
      </section>
      {/* Scroll sec ends here */}
      <Footer />
    </>
  );
};

export default OurBussiness;

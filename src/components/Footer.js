import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    var year = new Date();
    var fullyear=year.getFullYear();
    document.querySelector('.year').innerHTML=fullyear;
  }, []);
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrapper">
                <p>
                  © <span className="year"></span> GUTMIND All
                  CopyRights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

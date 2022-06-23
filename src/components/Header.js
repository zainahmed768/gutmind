import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { logo } from "../constant";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };
  useEffect(() => {
    // Mobile Nav
    $("document").ready(function () {
      $("header  .canvas-icon input").click(function () {
        $("header .mobile-header").addClass("show");
        $(this).addClass("cancel");
      });

      $("#header .cancel").click(function () {
        $("#header .mobile-header").removeClass("show");
      });
    });
    // Mobile Nav
    var toggle = document.querySelector(".menu input");
    var animate = setInterval(() => {
      toggle.checked = !toggle.checked;
    }, 3000);
    document.querySelector("body").addEventListener("click", () => {
      clearInterval(animate);
    });
  }, []);
  return (
    <>
      <header id="header">
        {/* main header starts here */}
        <div className="container-fluid">
          <div className="row align-item-center">
            <div className="col-6">
              <div className="logo-wrapper">
                <Link to="/">
                  <img src={logo} />
                </Link>
              </div>
            </div>
            <div className="col-6 align-self-center">
              <div className="icon-wrapper">
                <div className="canvas-icon">
                  <label className="menu">
                    <input onClick={handleClick} type="checkbox" />
                    <div></div>
                    <div></div>
                    <div></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* main header ends here */}
        <div className={+isActive ? "mobile-header show" : "mobile-header"}>
          <ul className="mobile-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About us</Link>
            </li>
            <li className="nav-item">
              <Link to="/AboutGutMind">About GutMind</Link>
            </li>
            <li className="nav-item">
              <Link to="/Innovation">Our Innovation Process</Link>
            </li>
            <li className="nav-item">
              <Link to="/OurBussiness">Our Businesses</Link>
            </li>
            <li className="nav-item">
              <Link to="/team">Team</Link>
            </li>
            <li className="nav-item">
              <Link to="/news">News</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;

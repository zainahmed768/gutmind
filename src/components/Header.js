import React, { useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { logo } from "../constant";

const Header = () => {
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
                    <input type="checkbox" />
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
        <div className="mobile-header">
          <ul className="mobile-nav">
            <li className="nav-item">
              <a href="#">Home</a>
            </li>
            <li className="nav-item">
              <a href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#">Buying</a>
            </li>
            <li className="nav-item">
              <a href="#">Selling</a>
            </li>
            <li className="nav-item">
              <a href="#">News</a>
            </li>
            <li className="nav-item">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;

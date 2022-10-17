import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { logo, toggle_icon } from "../constant";

const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const [cancel, setCancel] = useState(false);

	const handleClick = (event) => {
		// 👇️ toggle isActive state on click
		setIsActive((current) => !current);
	};
	const can = (event) => {
		// setCancel((current) => !current);
	};
	const openmenu = () => {
		$("header .mobile-header").addClass("show");
		setCancel((current) => !current);
	};
	const hidemenu = () => {
		$("#header .mobile-header").removeClass("show");
	};
	useEffect(() => {
		// Mobile Nav
		$("document").ready(function () {
			$("header  .canvas-icon label.menu").click(function () {
				$("header .mobile-header").addClass("show");
				// $(this).toggleClass("cancel");
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
								<div
									onMouseOver={openmenu}
									// onClick={can}
									className="canvas-icon"
								>
									<label className={+cancel ? "menu cancel" : "menu"}>
										{/* <input  onClick={handleClick}  type="checkbox" />
                    <div></div>
                    <div></div>
                    <div></div> */}
										<img src={toggle_icon} />
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* main header ends here */}
				<div
					onMouseLeave={hidemenu}
					onClick={hidemenu}
					className={+isActive ? "mobile-header show" : "mobile-header"}
				>
					<div className="cross">
						<i className="fa fa-close"></i>
					</div>
					<ul className="mobile-nav">
						<li className="nav-item">
							<Link to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/about">About Us</Link>
						</li>
						{/* <li className="nav-item">
              <Link to="/AboutGutMind">About GutMind</Link>
            </li> */}
						<li className="nav-item">
							<Link to="/Innovation">Our Innovation Process</Link>
						</li>
						<li className="nav-item">
							<Link to="/OurBussiness">Our Businesses</Link>
						</li>
						{/* <li className="nav-item">
              <Link to="/team">Team</Link>
            </li>
            <li className="nav-item">
              <Link to="/news">News</Link>
            </li> */}
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

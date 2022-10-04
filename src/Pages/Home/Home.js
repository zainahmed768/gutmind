import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/style.css";
import Slider from "react-slick";

const Home = () => {
	const settings = {
		draggable: true,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		dots: false,
		fade: true,
		speed: 500,
		infinite: true,
		cssEase: "ease-in-out",
		touchThreshold: 100,
	};
	return (
		<>
			<Header />
			<Slider className="Banner-slider" {...settings}>
				{/* face sec starts here */}
				<section className="face-sec">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="content-wrapper">
									<h1>
										OUR FOODS HAVE <br /> HAD NEGATIVE IMPACT <br /> ON OUR
										HEALTH
									</h1>
								</div>
							</div>
							<div className="col-lg-6"></div>
						</div>
					</div>
				</section>
				{/* face sec ends here */}
				{/* tree sec starts here */}
				<section className="tree-sec">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="content-wrapper">
									<h1>
										OUR FOODS HAVE <br /> HAD NEGATIVE IMPACT <br /> ON OUR
										HEALTH AND OUR PLANET
									</h1>
								</div>
							</div>
							<div className="col-lg-6"></div>
						</div>
					</div>
				</section>
				{/* tree sec ends here */}
				{/* junk sec starts here */}
				<section className="junk-sec">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="content-wrapper">
									<h1>
										This is the paradigm <br /> of you’re what you <br />
										eat
									</h1>
								</div>
							</div>
							<div className="col-lg-6"></div>
						</div>
					</div>
				</section>
				{/* junk sec ends here */}
				{/* child sec starts here */}
				<section className="child-sec">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="content-wrapper">
									<h1>
										How can we change this paradigm without wishing for people
										to change their dietary habits?
									</h1>
								</div>
							</div>
							<div className="col-lg-6"></div>
						</div>
					</div>
				</section>
				{/* child sec ends here */}
				{/* star sec starts here */}
				<section className="star-sec">
					<div className="container">
						<div className="row">
							<div className="col-lg-7">
								<div className="content-wrapper">
									<h1>
										This is our NorthStar at GutMind: to create great tasting
										foods which are good for your health and climate by
										discovering and incorporating functional ingredients in
										EVERYDAY foods
									</h1>
								</div>
							</div>
							<div className="col-lg-5"></div>
						</div>
					</div>
				</section>
				{/* star sec ends here */}
				{/* bakery sec starts here */}
				<section className="bakery-sec">
					<div className="container">
						<div className="row">
							<div className="col-lg-7">
								<div className="content-wrapper">
									<h1>
										{/* We want to turn ‘you are what you eat on its head’ by
                    aligning the 1st and 2nd brain incentives for food choice
                    decision making. */}
										Turn ‘YOU ARE WHAT YOU EAT’ ON ITS HEAD by aligning the 1st
										and 2nd brain incentives for food choice decision making.
									</h1>
								</div>
							</div>
							<div className="col-lg-5"></div>
						</div>
					</div>
				</section>
				{/* bakery sec ends here */}
			</Slider>
			<Footer />
		</>
	);
};

export default Home;

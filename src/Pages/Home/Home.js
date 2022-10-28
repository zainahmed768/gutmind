import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/style.css";
import Slider from "react-slick";
import axios from "axios";
import { baseurl, HomePageUrl } from "../../Services/ApiHelper";
import Spinner from "../../constant/Spinner";

const Home = () => {
	const [post, setPost] = useState(null);
	const [loader, setLoader] = useState(false);
	useEffect(() => {
		setLoader(true);
		axios.get(`${baseurl + HomePageUrl}`).then((response) => {
			setPost(response?.data.response.data);
			// console.log(response?.data.response.data);
			setLoader(false);
		});
	}, []);
	const settings = {
		draggable: true,
		autoplay: true,
		autoplaySpeed: 7000,
		arrows: true,
		dots: false,
		fade: true,
		speed: 600,
		infinite: true,
		cssEase: "ease-in-out",
		touchThreshold: 100,
	};
	if (loader) {
		return <Spinner />;
	}
	return (
		<>
			<Header />
			<Slider className="Banner-slider" {...settings}>
				{/* face sec starts here */}

				{post?.map((data) => {
					console.log(data?.imageUrl);
					return (
						<div>
							<section
								style={{ backgroundImage: `url("${data?.imageUrl}")` }}
								className="face-sec"
								key={data.id}
							>
								<div className="container">
									<div className="row descss">
										<div className="col-lg-8">
											<div
												dangerouslySetInnerHTML={{ __html: data.description }}
												className="content-wrapper"
											></div>
										</div>
										<div className="col-lg-4"></div>
									</div>
								</div>
							</section>
						</div>
					);
				})}

				{/* <section className="face-sec">
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
				</section> */}
				{/* face sec ends here */}
				{/* tree sec starts here */}
				{/* <section className="tree-sec">
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
				</section> */}
				{/* tree sec ends here */}
				{/* junk sec starts here */}
				{/* <section className="junk-sec">
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
				</section> */}
				{/* junk sec ends here */}
				{/* child sec starts here */}
				{/* <section className="child-sec">
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
				</section> */}
				{/* child sec ends here */}
				{/* star sec starts here */}
				{/* <section className="star-sec">
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
				</section> */}
				{/* star sec ends here */}
				{/* bakery sec starts here */}
				{/* <section className="bakery-sec">
					<div className="container">
						<div className="row">
							<div className="col-lg-7">
								<div className="content-wrapper">
									<h1>
										Turn ‘YOU ARE WHAT YOU EAT’ ON ITS HEAD by aligning the 1st
										and 2nd brain incentives for food choice decision making.
									</h1>
								</div>
							</div>
							<div className="col-lg-5"></div>
						</div>
					</div>
				</section> */}
				{/* bakery sec ends here */}
			</Slider>
			<Footer />
		</>
	);
};

export default Home;

import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/bussiness.css";
import { denovomeat, main_circle, mojologos } from "../../constant";
import "animate.css";
import WOW from "wowjs";

const OurBussiness = () => {
	useEffect(() => {
		new WOW.WOW({
			live: false,
		}).init();
	}, []);
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
			{/* <section className="bussiness-sec">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrapper">
								<h2>Our Business and Markets</h2>
							</div>
						</div>
						<div className="col-lg-3"></div>
						<div className="col-lg-6 mt-5">
							<div className="more-chart-text">
								<a href="javascript:void(0)">click on each BU to learn more</a>
							</div>
							<div className="cirle-wrapper mt-5">
								<div
									className="Performsnce side-circle-wrapper"
									onMouseEnter={handleMouseOver}
									onMouseLeave={handleMouseOut}
								>
									<a href="https://mojodrinks.com/" target="blank">
										<h5>
											Performsnce <br /> Beverages <br />
										</h5>
									</a>
								</div>
								<div
									className="Therapeutics side-circle-wrapper"
									onMouseOver={handleMouseOver2}
									onMouseOut={handleMouseOut2}
								>
									<h5>
										Therapeutics <br />
									</h5>
								</div>
								<div
									className="Therapes side-circle-wrapper"
									onMouseOver={handleMouseOver3}
									onMouseOut={handleMouseOut3}
								>
									<h5>
										Therapeutics <br />
									</h5>
								</div>
								<div
									className="Medical side-circle-wrapper"
									onMouseOver={handleMouseOver4}
									onMouseOut={handleMouseOut4}
								>
									<h5>
										Medical <br /> Foods <br />
									</h5>
								</div>
								<div
									className="Cosmetics side-circle-wrapper"
									onMouseOver={handleMouseOver5}
									onMouseOut={handleMouseOut5}
								>
									<h5>
										Cosmetics <br />
									</h5>
								</div>
								<div
									className="Alternative side-circle-wrapper"
									onMouseOver={handleMouseOver6}
									onMouseOut={handleMouseOut6}
								>
									<a href="https://denovofood.com/" target="blank">
										<h5>
											Alternative <br /> Meats <br />
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
						<div className="col-lg-3"></div>
						<div className="col-lg-12">
							<div className="contemt">
								{isHovering && (
									<div
										className="performance-content-wrapper side-contect side-contect1"
										style={{ opacity: 1 }}
									>
										<p>
											Feugiat scelerisque varius morbi enim nunc faucibus a.
											Aliquam malesuada bibendum arcu vitae elementum curabitur
											vitae nunc. Aliquam id diam maecenas ultricies mi eget.
											Dui ut ornare lectus sit amet est placerat in. Eget felis
											eget nunc lobortis.
										</p>
										<p>
											Et netus et malesuada fames. Aenean vel elit scelerisque
											mauris pellentesque pulvinar. Sagittis nisl rhoncus mattis
											rhoncus urna neque viverra justo.
										</p>
										<p>
											A cras semper auctor neque vitae tempus quam. Senectus et
											netus et malesuada fames. Id velit ut tortor pretium
											viverra suspendisse potenti nullam.
										</p>
									</div>
								)}
								{isHovering2 && (
									<div
										className="Therapeutics-content-wrapper side-contect side-contect2"
										style={{ opacity: 1 }}
									>
										<p>
											Feugiat scelerisque varius morbi enim nunc faucibus a.
											Aliquam malesuada bibendum arcu vitae elementum curabitur
											vitae nunc. Aliquam id diam maecenas ultricies mi eget.
											Dui ut ornare lectus sit amet est placerat in. Eget felis
											eget nunc lobortis.
										</p>
										<p>
											Et netus et malesuada fames. Aenean vel elit scelerisque
											mauris pellentesque pulvinar. Sagittis nisl rhoncus mattis
											rhoncus urna neque viverra justo.
										</p>
										<p>
											A cras semper auctor neque vitae tempus quam. Senectus et
											netus et malesuada fames. Id velit ut tortor pretium
											viverra suspendisse potenti nullam.
										</p>
									</div>
								)}
								{isHovering3 && (
									<div
										className="Therapes-content-wrapper side-contect side-contect3"
										style={{ opacity: 1 }}
									>
										<p>
											Feugiat scelerisque varius morbi enim nunc faucibus a.
											Aliquam malesuada bibendum arcu vitae elementum curabitur
											vitae nunc. Aliquam id diam maecenas ultricies mi eget.
											Dui ut ornare lectus sit amet est placerat in. Eget felis
											eget nunc lobortis.
										</p>
										<p>
											Et netus et malesuada fames. Aenean vel elit scelerisque
											mauris pellentesque pulvinar. Sagittis nisl rhoncus mattis
											rhoncus urna neque viverra justo.
										</p>
										<p>
											A cras semper auctor neque vitae tempus quam. Senectus et
											netus et malesuada fames. Id velit ut tortor pretium
											viverra suspendisse potenti nullam.
										</p>
									</div>
								)}
								{isHovering4 && (
									<div
										className="Medical-content-wrapper side-contect side-contec4"
										style={{ opacity: 1 }}
									>
										<p>
											Feugiat scelerisque varius morbi enim nunc faucibus a.
											Aliquam malesuada bibendum arcu vitae elementum curabitur
											vitae nunc. Aliquam id diam maecenas ultricies mi eget.
											Dui ut ornare lectus sit amet est placerat in. Eget felis
											eget nunc lobortis.
										</p>
										<p>
											Et netus et malesuada fames. Aenean vel elit scelerisque
											mauris pellentesque pulvinar. Sagittis nisl rhoncus mattis
											rhoncus urna neque viverra justo.
										</p>
										<p>
											A cras semper auctor neque vitae tempus quam. Senectus et
											netus et malesuada fames. Id velit ut tortor pretium
											viverra suspendisse potenti nullam.
										</p>
									</div>
								)}
								{isHovering5 && (
									<div
										className="Cosmetics-content-wrapper side-contect side-contect5"
										style={{ opacity: 1 }}
									>
										<p>
											Feugiat scelerisque varius morbi enim nunc faucibus a.
											Aliquam malesuada bibendum arcu vitae elementum curabitur
											vitae nunc. Aliquam id diam maecenas ultricies mi eget.
											Dui ut ornare lectus sit amet est placerat in. Eget felis
											eget nunc lobortis.
										</p>
										<p>
											Et netus et malesuada fames. Aenean vel elit scelerisque
											mauris pellentesque pulvinar. Sagittis nisl rhoncus mattis
											rhoncus urna neque viverra justo.
										</p>
										<p>
											A cras semper auctor neque vitae tempus quam. Senectus et
											netus et malesuada fames. Id velit ut tortor pretium
											viverra suspendisse potenti nullam.
										</p>
									</div>
								)}
								{isHovering6 && (
									<div
										className="Alternative-content-wrapper side-contect side-contect6"
										style={{ opacity: 1 }}
									>
										<p>
											Feugiat scelerisque varius morbi enim nunc faucibus a.
											Aliquam malesuada bibendum arcu vitae elementum curabitur
											vitae nunc. Aliquam id diam maecenas ultricies mi eget.
											Dui ut ornare lectus sit amet est placerat in. Eget felis
											eget nunc lobortis.
										</p>
										<p>
											Et netus et malesuada fames. Aenean vel elit scelerisque
											mauris pellentesque pulvinar. Sagittis nisl rhoncus mattis
											rhoncus urna neque viverra justo.
										</p>
										<p>
											A cras semper auctor neque vitae tempus quam. Senectus et
											netus et malesuada fames. Id velit ut tortor pretium
											viverra suspendisse potenti nullam.
										</p>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="row sdd">
						<div className="col-lg-6"></div>
						<div className="col-lg-6"></div>
					</div>
				</div>
			</section> */}
			{/* Bussiness sec ends here */}
			{/* Scroll sec starts here */}
			<section className="scroll">
				<div className="container"></div>
			</section>
			{/* Scroll sec ends here */}
			{/* brands sec starts here */}
			<section className="brands-sec">
				<div className="container">
					<div className="row py-5 align-items-center">
						<div className="col-lg-6">
							<div className="brand-logo-wrapper">
								<a href="https://mojodrinks.com/" target="blank">
									<figure>
										<img
											src={mojologos}
											className="img-fluid wow animate__animated animate__fadeInLeft mb-5 mb-lg-0"
											alt=""
										/>
									</figure>
								</a>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brand-content-wrapper wow animate__animated animate__fadeInRight">
								{/* <h4>Mojo Drinks</h4> */}
								<h4>For GutMind, our businesses, Mojo:</h4>
								<p>
									Global energy and functional beverage markets are $61B and
									$120B respectively. Additionally, teenagers, who are most at
									risk for the onset of mental health issues are among the top
									consumers of energy beverages. Hence, our interest in this
									space is to bring targeted mental health benefits via
									functional ingredients to consumers of our beverages. Our
									motto at MojoDrinks is we need more than energy to be a better
									version of ourselves. The key functional ingredients in the
									first beverage we are commercializing are key ingredients
									lacking in the Western diet such as dietary fiber and vitamin
									D. While most players in this space position their products
									for athletes or sport enthusiasts, we position our products
									for average consumers who want to enhance their performance in
									their routine daily activities.
								</p>
								<a
									className="btn"
									href="https://mojodrinks.com/"
									target="blank"
								>
									Read More
								</a>
							</div>
						</div>
					</div>
					<div className="row py-5 align-items-center flex-column-reverse flex-lg-row">
						<div className="col-lg-6">
							<div className="brand-content-wrapper wow animate__animated animate__fadeInLeft">
								{/* <h4>Denovomeat</h4> */}
								<h4>For GutMind, our businesses, Denovo:</h4>
								<p>
									The global plant-based food market is expected to reach $78B
									in 2025. There is increasing interest by consumers,
									particularly Millennials and Gen Z, for food products with a
									better sustainability profile. We believe this is another
									avenue for the introduction of functional ingredients. Our
									philosophy at DeNovoMeat is that most consumers (~95% are
									omnivores or flexitarians) are not vegan and are not willing
									to compromise on the joy of eating meat. So our approach to
									product development is unique versus market leaders in this
									space (e.g. Impossible Foods and Beyond Meat) in two ways: A)
									we will use animal based ingredients to enhance the quality of
									our products and better mimic animal based foods so we can
									have a broad market adoption potential, and B) while players
									in this space are solely focused on climate and
									sustainability, health is also a primary focus of ours through
									the introduction of key functional ingredients lacking in the
									Wester diet such as dietary fibers and omega 3 fatty acids.
								</p>
								<a
									className="btn"
									href="https://denovomeat.com/"
									target="blank"
								>
									Read More
								</a>
							</div>
						</div>
						<div className="col-lg-6 text-center">
							<div className="brand-logo-wrapper wow animate__animated animate__fadeInRight">
								<a href="https://denovomeat.com/" target="blank">
									<figure>
										<img
											src={denovomeat}
											className="img-fluid mb-5 mb-lg-0"
											alt=""
										/>
									</figure>
								</a>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="brand-content-wrapper wow animate__animated animate__fadeInLeft">
								{/* <h4>Denovomeat</h4> */}
								<h4>
									Waiver language for submitting ideas for mojo and denovo:
								</h4>
								<p>
									By submitting the idea, I grant MojoDrinks (DeNovoMeat for
									DeNovoMeat.com) the right to use, reproduce, distribute,
									publish and publicly display the entry submission.
								</p>
								<p>
									I verify that the idea which is the subject matter of this
									agreement is original to me in all respects. I am the sole and
									exclusive owner of the entry; no part infringes the copyright
									or any other personal or propriety right of any person.
								</p>
								<p>
									I release MojoDrinks (DeNovoMeat for DeNovoMeat.com) from all
									liability which may arise from any and/or all claims by me or
									any third party in connection with the entry submitted.
								</p>
								<p>
									I understand that my entry may be used in whole or in part, at
									any time, without prior agreement. I agree to waive any right
									that I may have to inspect and/or approve of the use,
									reproduction, distribution, publication and publicly display
									of the idea submitted or the editorial or advertising that may
									be used in connection therewith. This consent authorizes any
									initial and subsequent disclosure or publication of the entry
									at any time.
								</p>
								<p>
									I agree to indemnify MojoDrinks (DeNovoMeat for
									DeNovoMeat.com) for any issues rising from my breach of any
									covenant, representation or warranty of this agreement. I have
									read and understand all the terms and conditions for this
									consent, waiver and release.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* brands sec ends here */}
			<Footer />
		</>
	);
};

export default OurBussiness;

import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/inovation.css";
import { com, com1, com2, com3, com4 } from "../../constant";

const Innovation = () => {
	return (
		<>
			<Header />
			{/* inovation sec starts here */}
			<section className="inovation-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrapper">
								<h2>Our Innovation And Commercialization Process</h2>
							</div>
							<div className="row">
								<div className="col-lg-6">
									<div className="content-wrapper vi-con">
										<h4>Premises:</h4>
										<p>
											There are layers of complexities to scientifically and
											precisely understand the impact of food on our microbiome
											and physical and mental health.
										</p>
										<p>
											We don’t have to have precise science to bring health
											benefits to the masses.
										</p>
										<p>
											The approach to realize the vision of health though food,
											not medicine, must be dramatically different than drug
											discovery and commercialization.
										</p>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="content-wrapper vi-con">
										<h4>GutMind’s approach:</h4>
										<p>
											Use proprietary NLP-AI tools to fully map all existing
											published knowledge about relationships between botanicals
											and their functional ingredients, to the microbiome and
											their metabolites, to physical and mental health.
										</p>
										<p>
											Discover unique insights by observing and investigating
											patterns of significant relationships.
										</p>
										<p>
											Selectively use in-vitro gut model systems and/or clinical
											studies for further investigations.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* inovation sec ends here */}
			{/* commercilization starts here */}
			{/* <section className="commercilization-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="content-wrapper">
                <h4>Commercialization Process</h4>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-3">
                  <div class="maincountainer arrow">
                    <div class="thecard">
                      <div class="thefront">
                        <img src={com1} />
                      </div>
                      <div class="theback">
                        <div className="grey-content">NLP-AI</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div class="maincountainer arrow">
                    <div class="thecard">
                      <div class="thefront">
                        <img src={com2} />
                      </div>
                      <div class="theback">
                        <div className="blue-content">
                          Insight <br /> Discovery
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div class="maincountainer arrow">
                    <div class="thecard">
                      <div class="thefront">
                        <img src={com3} />
                      </div>
                      <div class="theback">
                        <div className="purple-content">
                          Formulation <br /> Innovation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div class="maincountainer">
                    <div class="thecard">
                      <div class="thefront">
                        <img src={com4} />
                      </div>
                      <div class="theback">
                        <div className="pink-content">
                          Branded <br /> Foods And <br /> Beverage
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row op">
                <div className="col-lg-5 align-self-center">
                  <h4>
                    Gut Operating System <br />{" "}
                    <span> Platform Development </span>
                  </h4>
                </div>
                <div className="col-lg-3">
                  <div className="circle-wrapper pink-circle">
                    <div className="circle-content">
                      <h4>
                        In-Vitro <br /> Gut <br /> Model
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="circle-wrapper blue-circle">
                    <div className="circle-content">
                      <h4>
                        Clinical <br /> Study
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
			<section className="com-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="img-wrapper">
								<figure>
									<img src={com} className="img-fluid" alt="" />
								</figure>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* commercilization ends here */}
			<Footer />
		</>
	);
};

export default Innovation;

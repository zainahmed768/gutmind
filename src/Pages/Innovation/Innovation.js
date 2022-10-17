import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/inovation.css";
import { com, com1, com2, com3, com4 } from "../../constant";
import axios from "axios";
import { baseurl, InnovationPageUrl } from "../../Services/ApiHelper";
import Spinner from "../../constant/Spinner";

const Innovation = () => {
	const [post, setPost] = useState(null);
	const [loader, setLoader] = useState(false);
	useEffect(() => {
		setLoader(true);
		axios.get(`${baseurl + InnovationPageUrl}`).then((response) => {
			setPost(response?.data.response.data);
			setLoader(false);
			// console.log(post.pageTitle);
		});
	}, []);

	if (loader) {
		return <Spinner />;
	}
	return (
		<>
			<Header />
			{/* inovation sec starts here */}
			<section className="inovation-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrapper">
								<h2>{post?.pageTitle}</h2>
							</div>
							<div className="row">
								<div className="col-lg-6">
									<div className="content-wrapper vi-con">
										<h4>Premises:</h4>
										<div
											dangerouslySetInnerHTML={{ __html: post?.premises }}
										></div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="content-wrapper vi-con">
										<h4>GutMind’s approach:</h4>
										<div
											dangerouslySetInnerHTML={{
												__html: post?.gutmindApproach,
											}}
										></div>
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
			<section className="com-sec mt-5">
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

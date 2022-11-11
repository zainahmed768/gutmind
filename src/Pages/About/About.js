import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/about.css";
import axios from "axios";
import { baseurl, AboutPageUrl, SitePageUrl } from "../../Services/ApiHelper";
import Spinner from "../../constant/Spinner";
import { logo, Charts } from "../../constant";

const About = () => {
	const [loader, setLoader] = useState(false);
	const [post, setPost] = useState(null);
	const [posts, setPosts] = useState(null);
	const Apiurl = "https://backend-gutmind.developer-ourbase-camp.com/uploads/";
	useEffect(() => {
		axios.get(`${baseurl + SitePageUrl}`).then((response) => {
			setPosts(response?.data.response.data);
			console.log(response?.data.response.data);
		});
	}, []);
	useEffect(() => {
		setLoader(true);
		axios.get(`${baseurl + AboutPageUrl}`).then((response) => {
			setPost(response?.data.response.data);
			setLoader(false);
		});
	}, []);
	const keypoint = post?.keyPoints.split(",");
	if (loader) {
		return <Spinner />;
	}
	console.log(posts, "sdsd");
	return (
		<>
			<Header />
			{/* about sec starts here */}
			<section className="about-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrapper">
								<h2>{post?.pageTitle}</h2>
								<video
									width="100%"
									height="350px"
									controls="controls"
									style={{ marginTop: "5px" }}
								>
									<source src={Apiurl + posts?.aboutVideo} type="video/mp4" />
								</video>
								<div className="row">
									<div className="col-lg-6">
										<div className="vi-con vi-con2">
											<div
												dangerouslySetInnerHTML={{ __html: post?.content }}
											></div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="vi-con vi-con2">
											<div
												dangerouslySetInnerHTML={{ __html: post?.ourCulture }}
											></div>
										</div>
									</div>
								</div>
								{/* <h2>{post?.pageTitle}</h2>
								<div dangerouslySetInnerHTML={{ __html: post?.content }}></div> */}
							</div>
							{/* <div className="content-wrapper pt-5 pb-3">
								<div
									dangerouslySetInnerHTML={{ __html: post?.ourCulture }}
								></div>
							</div> */}
							<div className="content-wrapper">
								<div className="row">
									<div className="col-lg-6">
										<div className="vi-con">
											<h4>Our Vision :</h4>
											<div
												dangerouslySetInnerHTML={{ __html: post?.ourVision }}
											></div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="vi-con">
											<h4>Our Mission :</h4>
											<div
												dangerouslySetInnerHTML={{ __html: post?.ourMission }}
											></div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="vi-con">
											<h4>Our Purpose :</h4>
											<div
												dangerouslySetInnerHTML={{ __html: post?.ourPurpose }}
											></div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="vi-con">
											<h4>Our Values:</h4>
											<div
												dangerouslySetInnerHTML={{ __html: post?.ourValues }}
											></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row pt-4">
						<div className="col-lg-12">
							<div className="content-wrapper">
								<h2>Key Components Of Our Strategy To Win</h2>
								{/* <div className="northen-wrapper">
									<h2>{post?.title}</h2>
									<h3>{post?.subTitle}</h3>
								</div> */}
								<img
									src={Apiurl + posts?.aboutImage}
									alt="Charts	"
									className="img-fluid"
								/>
							</div>
						</div>
					</div>
					{/* <div className="row pt-3">
						<div className="col-lg-3">
							<div className="box-wrapper">
								<div className="box-content-wrapper">
									<h4> {keypoint ? keypoint[0] : null}</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="box-wrapper">
								<div className="box-content-wrapper">
									<h4>{keypoint ? keypoint[1] : null}</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="box-wrapper">
								<div className="box-content-wrapper">
									<h4>{keypoint ? keypoint[1] : null}</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="box-wrapper">
								<div className="box-content-wrapper">
									<h4>{keypoint ? keypoint[2] : null}</h4>
								</div>
							</div>
						</div>
					</div> */}
					{/* <div className="row pt-3">
						<div className="col-lg-3">
							<div className="box-wrapper light-pink">
								<div className="box-content-wrapper">
									<h4>{keypoint ? keypoint[3] : null}</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="box-wrapper light-pink">
								<div className="box-content-wrapper">
									<h4>{keypoint ? keypoint[4] : null}</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="box-wrapper light-pink">
								<div className="box-content-wrapper">
									<h4>{keypoint ? keypoint[5] : null}</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-3 margin_set">
							<div className="box-wrapper light-pink">
								<div className="box-content-wrapper ">
									<h4>{keypoint ? keypoint[6] : null}</h4>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</section>
			{/* about sec ends here */}
			<Footer />
		</>
	);
};

export default About;

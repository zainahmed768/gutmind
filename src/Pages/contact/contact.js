import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import {
	baseurl,
	ContactFormUrl,
	headers,
	SitePageUrl,
} from "../../Services/ApiHelper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	const [post, setPost] = useState(null);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [company, setcompany] = useState("");
	const [subject, setsubject] = useState("");
	const [loading, setLoading] = useState(false);
	const [captcha, setCaptcha] = useState("");

	useEffect(() => {
		axios.get(`${baseurl + SitePageUrl}`).then((response) => {
			setPost(response?.data.response.data);
			console.log(response?.data.response.data);
		});
	}, []);
	const recaptchaRef = React.createRef();
	const onSubmit = () => {
		// const recaptchaValue = recaptchaRef.current.getValue();
		// this.props.onSubmit(recaptchaValue);
	};
	// const notify = () => toast("Wow so easy!");

	function onCaptchaHandler(value) {
		setCaptcha(value);
	}

	// console.log("Captcha value:", captcha);

	const ContactUsHandler = (e) => {
		e.preventDefault();
		// console.log("run st");
		setLoading(true);
		if (!name || !phone || !email || !message) {
			toast.error("Please Enter All Fields");
			setLoading(false);
			return;
		}
		if (
			!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email,
			)
		) {
			toast.error("Invalid Email");
			setLoading(false);
			return;
		}
		if (phone.length < 11 || phone.length > 20) {
			toast.error(
				"The phone must be at least 11 characters and more than 20 characters",
			);
			setLoading(false);
			return;
		}

		if (!captcha) {
			toast.error("Please fill captcha");
			setLoading(false);
			return;
		}

		let data = {
			name: name,
			phone: phone,
			email: email,
			company: company,
			subject: subject,
			message: message,
		};
		console.log(data);

		// console.log("run md");

		axios
			.post(`${baseurl + ContactFormUrl}`, data, headers)
			.then((response) => {
				// setPost(response?.data.response.data);
				setLoading(false);
				toast.success("Your message was Send. Thank you for contacting us.");
				setName("");
				setEmail("");
				setPhone("");
				setMessage("");
				setcompany("");
				setsubject("");
				setCaptcha("");
				console.log(response, "asascsadfsdfsdf");
			})
			.catch((err) => {
				setLoading(false);
				// console.log(err, "sadasdasdasda");
				toast.error(err?.response?.data?.errors?.phone[0]);
			});
	};

	return (
		<>
			<Header />
			{/* contact starts here */}
			<section className="contact">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="content-wrapper">
								<h2>contact Us</h2>
								{/* <ul>
									<li>{post?.contactEmail}</li>
									<li>{post?.contactPhone}</li>
								</ul> */}
							</div>
						</div>
						<div className="col-lg-1"></div>
						<div className="col-lg-5">
							<div className="contact-form-wrapper">
								<form id="form">
									<div className="form-group row">
										<div className="col-md-6">
											<input
												placeholder="Name"
												type="text"
												value={name}
												required
												onChange={(e) => setName(e.target.value)}
												className="form-control"
											/>
										</div>
										<div className="col-md-6">
											<input
												placeholder="Email"
												type="email"
												required
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												className="form-control"
											/>
										</div>
									</div>
									<div className="form-group row">
										<div className="col-md-6">
											<input
												placeholder="Phone Number"
												type="tel"
												required
												value={phone}
												onChange={(e) => setPhone(e.target.value)}
												className="form-control"
											/>
										</div>
										<div className="col-md-6">
											<input
												placeholder="Company"
												type="text"
												required
												value={company}
												onChange={(e) => setcompany(e.target.value)}
												className="form-control"
											/>
										</div>
									</div>
									<div className="form-group">
										<input
											placeholder="Subject"
											type="text"
											required
											value={subject}
											onChange={(e) => setsubject(e.target.value)}
											className="form-control"
										/>
									</div>
									<div className="form-group">
										<textarea
											placeholder="Type Your Message Here"
											className="form-control"
											value={message}
											type="text"
											required
											onChange={(e) => setMessage(e.target.value)}
											rows="5"
										></textarea>
									</div>
									<ReCAPTCHA
										ref={recaptchaRef}
										sitekey="6LcEx5YgAAAAAGkucPGsai61Y4yspbVgwR1rmYUQ"
										onChange={onCaptchaHandler}
									/>
									<div className="form-group mt-3">
										<button
											className="btn"
											// type="submit"
											onClick={(e) => ContactUsHandler(e)}
											disabled={loading}
										>
											{loading ? "Loading.." : "Submit"}
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* contact ends here */}
			<Footer />
		</>
	);
};

export default Contact;

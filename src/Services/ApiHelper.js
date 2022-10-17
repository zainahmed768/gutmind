export const baseurl = "https://backend-gutmind.developer-ourbase-camp.com/api";

export const HomePageUrl = "/home";
export const AboutPageUrl = "/about-gutmind";
export const InnovationPageUrl = "/our-innovation-process";
export const BusinessPageUrl = "/our-business";
export const ContactFormUrl = "/contact-query-submit";
export const SitePageUrl = "/site-settings";

export const headers = () => {
	return {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	};
};

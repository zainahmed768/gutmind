import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/contact.css";

const Contact = () => {
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
                <ul>
                  <li>
                    GutMind | 1st Floor, Unit 6 | Liverpool International
                    Business Park |
                  </li>
                  <li>DeHavilland Drive | Liverpool | L24 8RN</li>
                  <li>info@gutmind-group.com </li>
                  <li>0151 317 4450</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="contact-form-wrapper">
                <form id="form">
                  <div className="form-group row">
                    <div className="col-md-6">
                      <input placeholder="Name" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <input placeholder="Email" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <input placeholder="Phone" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <input placeholder="Address" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <input placeholder="Subject" className="form-control" />
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Type Your Message Here"
                      className="form-control"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button className="btn" type="button">
                      Submit
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

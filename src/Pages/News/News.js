import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { News1, News2, News3, News4, News5, News6 } from "../../constant";
import "../../assets/css/news.css";

const News = () => {
  const news_data = [
    {
      id: 1,
      des: "“Meet the Psychobiome”: Holobiome research profiled in Science magazine",
      img: News1,
    },
    {
      id: 2,
      des: "Corundum Systems Biology selects Holobiome as first private company for direct investment by CSB-1 fund",
      img: News2,
    },
    {
      id: 3,
      des: "“Meet the Psychobiome”: Holobiome research profiled in Science magazine",
      img: News3,
    },
    {
      id: 4,
      des: "Corundum Systems Biology selects Holobiome as first private company for direct investment by CSB-1 fund",
      img: News4,
    },
    {
      id: 5,
      des: "“Meet the Psychobiome”: Holobiome research profiled in Science magazine ",
      img: News5,
    },
    {
      id: 6,
      des: "Corundum Systems Biology selects Holobiome as first private company for direct investment by CSB-1 fund",
      img: News6,
    },
  ];
  return (
    <>
      <Header />
      {/* news sec starts here */}
      <section className="News">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="content-wrapper">
                <h2>News</h2>
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="row">
                {news_data.map((data, index) => {
                  return (
                    <div key={index} className="col-lg-6">
                      <div className={"news-wrapper news-card-" + data?.id}>
                        <div className="news-img-wrapper">
                          <figure>
                            <img src={data?.img} className="img-fluid" />
                          </figure>
                        </div>
                        <div className="news-content-wrapper">
                          <p>{data?.des}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </section>
      {/* news sec ends here */}
      <Footer />
    </>
  );
};

export default News;

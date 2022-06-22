import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { team1, team2, team3, team4 } from "../../constant";
import "../../assets/css/team.css";

const Team = () => {
  const team = [
    {
      id: 1,
      name: "Philip Strandwitz, PhD",
      major: "Principal Scientist",
      img: team1,
    },
    {
      id: 2,
      name: "Cameron Friedman",
      major: "Principal Scientist",
      img: team2,
    },
    {
      id: 3,
      name: "Stephen Skolnick",
      major: "Principal Scientist",
      img: team3,
    },
    {
      id: 4,
      name: "Philip Strandwitz, PhD",
      major: "Principal Scientist",
      img: team4,
    },
  ];
  return (
    <>
      <Header />
      {/* team sec starts here */}
      <section className="team">
        <div className="container">
          <div className="row">
            {team.map((data, index) => {
              return (
                <div className="col-lg-3">
                  <div key={index} className="team-card-wrapper">
                    <div className="team-img-wrapper">
                      <img src={data?.img} className="img-fluid" />
                    </div>
                    <div className="team-content-wrapper">
                      <h4>{data?.name}</h4>
                      <h6>{data?.major}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* team sec ends here */}
      <Footer />
    </>
  );
};

export default Team;

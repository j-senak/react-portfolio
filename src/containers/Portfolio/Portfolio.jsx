import React from "react";
import "./Portfolio.css";
import RainorShineimg from "./screenshots/rainorshine.png";
import PokeTeamManager from "./screenshots/pokemonteammanager.png";
import EatDahBurger from "./screenshots/eatdahburger.png";
import FitnessTracker from "./screenshots/fitnesstracker.png";
import BudgetTracker from "./screenshots/financetracker.png";
import EmployeeDirectory from "./screenshots/employeedirectory.png";
import Project from "../Project/Project.jsx";

const Portfolio = () => {
  return (
    <div>
      <div className="container">
        <main className="row">
          <div className="col-md-8">
            <article className="block">
              <h1 className="block-header">Portfolio</h1>
              <hr />
              <div className="row">
                <Project
                  title="Rain or Shine"
                  url="https://j-senak.github.io/Rain-or-Shine/"
                  img={RainorShineimg}
                />
                <Project
                  title="PokeTeamManager"
                  url="https://dry-shelf-84511.herokuapp.com/?id=5ea3cfd2b0bdeb00174f4f10"
                  img={PokeTeamManager}
                />
                <div className="col-sm-6 col-md-12 col-lg-6">
                  {/* <a href="https://j-senak.github.io/Rain-or-Shine/">
                    <p>Rain or Shine</p>
                    <img
                      className="img-fluid port-image"
                      src={RainorShineimg}
                      alt=""
                    ></img>
                  </a> */}
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  {/* <a href="https://j-senak.github.io/homework2/">
                      <img
                        className="img-fluid port-image"
                        src="./screenshots/Screen Shot 2020-03-20 at 8.03.01 PM.png"
                        alt=""
                      ></img>
                    </a> */}
                </div>
                <div className="row">
                  <Project
                    title="Eat Dah Burger!"
                    url="https://immense-plains-29626.herokuapp.com/"
                    img={EatDahBurger}
                  />
                  <Project
                    title="Fitness Tracker"
                    url="https://dry-shelf-84511.herokuapp.com/?id=5ea3cfd2b0bdeb00174f4f10"
                    img={FitnessTracker}
                  />
                  <div className="col-sm-6 col-md-12 col-lg-6">
                    {/* <a href="https://j-senak.github.io/homework3/">
                        <img
                          className="img-fluid port-image"
                          src="./screenshots/Screen Shot 2020-03-20 at 8.07.54 PM.png"
                          alt=""
                        ></img>
                      </a> */}
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      {/* <a href="https://immense-plains-29626.herokuapp.com/">
                          <img
                            className="img-fluid port-image"
                            src="./screenshots/Screen Shot 2020-04-10 at 9.36.55 PM.png"
                            alt=""
                          ></img>
                        </a> */}
                    </div>
                    <div className="row">
                      <Project
                        title="PWA Budget Tracker"
                        url="https://github.com/j-senak/PWA-Budget-Tracker"
                        img={BudgetTracker}
                      />
                      <Project
                        title="Employee Directory"
                        url="https://github.com/j-senak/employee-directory-sort"
                        img={EmployeeDirectory}
                      />
                      <div className="col-sm-6 col-md-12 col-lg-6">
                        {/* <a href="https://homework11-note-taker.herokuapp.com/">
                            <img
                              className="img-fluid port-image"
                              src="./screenshots/Screen Shot 2020-04-03 at 10.42.59 PM.png"
                              alt=""
                            ></img>
                          </a> */}
                        <div className="col-sm-6 col-md-12 col-lg-6">
                          {/* <a href="https://j-senak.github.io/Homework9-Good-README-Generator/">
                              <img
                                className="img-fluid port-image"
                                src="./screenshots/Screen Shot 2020-04-17 at 12.55.56 AM.png"
                                alt=""
                              ></img>
                            </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;

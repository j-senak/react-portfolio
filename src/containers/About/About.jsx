import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <main className="container">
        <section className="row">
          <div className="col-md-8">
            <article className="block">
              <h1 className="block-header">About Me</h1>
              <hr />
              <img
                src="https://avatars3.githubusercontent.com/u/59843943?s=460&u=52734d099e7cab589858ebb7a59e735f02ff290c&v=4"
                alt=""
                id="about-image"
              />
              <p>
                I began working in various part time service industry jobs in
                high school. I joined Fastenal as I graduated and worked there
                for over 8 years. I became an Outside Sales Representative,
                gaining many sales and people skills as I continued to learn.
                Joined the Georgia Tech Full Stack Web Development program to
                gain new skills and a new career. Experienced in HTML,
                Bootstrap, CSS, JavaScript, jQuery, Node, Express, mySQL, MongoDB, and React.
              </p>
              <br />
              <br />
              <ul>
                <li>Email: jmsenak@gmail</li>
                <li>Phone #: (260) 416-7711</li>
                <li>
                  <a href="https://www.linkedin.com/in/john-senak-b1a05119a/">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/j-senak">Github</a>
                </li>
                <li>
                  <a href="https://resume.io/r/fEfgKepQA">Resume</a>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;

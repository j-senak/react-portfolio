import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <main className="container">
        <section className="row">
          <div className="col-md-8">
            <form className="block form-horizontal">
              <h1 className="block-header">Contact</h1>
              <hr />
              <div className="form-group">
                <label htmlFor="name" className="col-sm-2 control-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="col-sm-2 control-label">
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="msg">
                      Message
                    </label>
                    <div className="col-sm-10">
                      <textarea
                        id="msg"
                        className="form-control"
                        rows="3"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <button className="submit-btn">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Contact;
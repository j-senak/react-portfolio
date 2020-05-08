import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Portfolio from "./containers/Portfolio/Portfolio";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () =>  {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path = "/" component = {About} />
        <Route exact path = "/index" component = {About} />
        <Route exact path = "/portfolio" component = {Portfolio} />
        <Route exact path = "/contact" component = {Contact} />
        <Footer />
      </div>
    </Router>
  );
};


export default App;
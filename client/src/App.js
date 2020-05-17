import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./containers/About/About";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;

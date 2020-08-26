import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { NoMatch } from "./components/NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import { Introduction } from "./components/Introduction";

function App() {
  return (
    <React.Fragment>
      {/* Main Navigation */}
      <NavigationBar />
      {/* <Jumbotron /> */}
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cv" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
      {/* Main Navigation */}

      {/* <GridMessingAbout /> */}
      {/* Main Layout */}
      <Introduction />
      <Portfolio />
      {/* Main Layout */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </React.Fragment>
  );
}

export default App;

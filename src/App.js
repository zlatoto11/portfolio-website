import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { NoMatch } from "./components/NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";
import { IdeationCards } from "./components/projects/IdeationCards";
import { MobileLearningApplication } from "./components/projects/MobileLearningApplication";
import { MobileRunningTrackerApplication } from "./components/projects/MobileRunningTrackerApplication";
import { TowerDefense } from "./components/projects/TowerDefense";
import { Portfolio } from "./components/Portfolio";
function App() {
  return (
    <React.Fragment>
      {/* Navigation */}
      {/* Header  */}
      {/* End of Navigation */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cv" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/ideationcards" component={IdeationCards} />
          <Route
            exact
            path="/mobilelearningapplication"
            component={MobileLearningApplication}
          />
          <Route
            exact
            path="/mobilerunningtrackerapplication"
            component={MobileRunningTrackerApplication}
          />
          <Route exact path="/towerdefense" component={TowerDefense} />
          <Route path="/projects" component={Portfolio} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

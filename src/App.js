import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { NoMatch } from "./components/NoMatch";
import { NavigationBar } from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { IdeationCards } from "./components/IdeationCards";
function App() {
  return (
    <React.Fragment>
      {/* Navigation */}
      <NavigationBar />
      {/* End of Navigation */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cv" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/ideationcards" component={IdeationCards} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

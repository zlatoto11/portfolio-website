import React from "react";
import "./App.css";
import {
  HashRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import { Home } from "./components/Home";
import { NoMatch } from "./components/NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";
import { IdeationCards } from "./components/projects/IdeationCards";
import { NetCoreProject } from "./components/projects/NetCoreProject";
import { MobileLearningApplication } from "./components/projects/MobileLearningApplication";
import { MobileRunningTrackerApplication } from "./components/projects/MobileRunningTrackerApplication";
import { TowerDefense } from "./components/projects/TowerDefense";
import { Portfolio } from "./components/Portfolio";
import { TwoDPlatformer } from "./components/projects/2DPlatformerGame";
import { PersonalWebsite } from "./components/projects/PersonalWebsite";
import { G53Graphics } from "./components/projects/G53Graphics";
import { DatabaseWebsite } from "./components/projects/DatabaseWebsite";
import { AmazonClone } from "./components/projects/AmazonClone";
import { PokeDexApplication } from "./components/projects/PokeDexApplication";
import { WhatsAppClone } from "./components/projects/WhatsAppClone";

function App() {
  return (
    <React.Fragment>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/amazon-clone" component={AmazonClone} />
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
          <Route exact path="/2dplatformergame" component={TwoDPlatformer} />
          <Route exact path="/personalwebsite" component={PersonalWebsite} />
          <Route exact path="/OpenGLGraphics" component={G53Graphics} />
          <Route exact path="/databaseWebsite" component={DatabaseWebsite} />
          <Route exact path="/pokedex" component={PokeDexApplication} />
          <Route exact path="/whatsapp-clone" component={WhatsAppClone} />
          <Route exact path="/BookDatabaseNetCore" component={NetCoreProject} />
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;

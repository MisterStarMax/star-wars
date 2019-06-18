import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from '../header';
import Menu from '../menu';
import PageNotFound from '../pagenotfound';
import { PersonPage, PlanetPage, StarshipsPage } from '../pages';

import './app.css';

const App = () => {
  return(
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Menu />} />
          <Route exact path="/people/:id?" component={PersonPage} />
          <Route exact path="/planets/:id?" component={PlanetPage} />
          <Route exact path="/starships/:id?" component={StarshipsPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

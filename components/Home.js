import React from "react";
import ReactDOM from "react-dom";
import Eventger from "./projects/Eventger";
import Sesame from "./projects/Sesame";
import Portfolio from "./projects/Portfolio";
import Album from "./album/Album";


import Main from "./Main";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const Home = (props) => {
  return (
     <Switch>
    <Route exact path="/"  render={(props) => (<Main {...props} routes={Main.routes} /> )} />
    <Route exact path="/album" render={(props) => (<Album {...props} routes={Album.routes} /> )} />
    </Switch>
  );
};
export default Home;
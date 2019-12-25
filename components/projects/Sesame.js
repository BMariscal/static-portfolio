import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const Sesame = (props) => {
  return (
    <div>
        <ul className="ul">
      <li> Game with a chat room where you can anonymously reach out to an administrator <br/> who can get the user in touch with a nearby shelter.</li>
       <li>
          Group project (4 person team).
        </li>
       <li>
         Authentication done with passportjs.
       </li>
        <li>
          React/React Router 4 frontend; Node.js/Express/MySQL backend.
        </li>
        <li>
          Deployment pipeline: Travis CI, Enzyme and Jest tests, Heroku containers.
        </li>
      </ul>
      <h6> My contributions: </h6>
       <ul className="ul">
      <li> For this project, my team took legacy code ( another team's project) and added new features. </li>
       <li> I worked on the Admin page, integrated the Google Maps API, and worked on user localization. </li>
        <li> Used the HTML Geolocation API to locate the user's position. </li>
        <li> Created Ajax calls to the backend to store the user's position.</li>
        <li> I added new react components for the Admin page and integrated the Google Maps API <br/> to find shelters and domestic violence help near the user. </li>
         <li> I made changes to the backend authentication and the user account creation to store and update the user's location.</li>
        <li> I added new Enzyme integration tests. </li>
        </ul>

    </div>
  )
};
export default Sesame;
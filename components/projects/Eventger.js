import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



function DATA(){
    return (<div> <ul className="ul">
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
          Deployment pipeline: Travis CI, Mocha and Chai tests, Heroku containers.
        </li>
      </ul>
      <h6> My contributions: </h6>
       <ul className="ul">
            <li> Deployed the application to Heroku and integrated Travis CI. </li>
            <li>Lead frontend engineer: Implemented the frontend with React, React Router4 and Bootstrap. </li>
            <li> Integrated passportjs for authentication along with the bcrypt Node.js library to hash passwords. </li>
            <li> Improved the extensibility and readability of the API by adding the Express router routes. </li>
        </ul> </div>)
}


const Eventger = () => {
    return (
   <div>
     {<DATA/>}
   </div>
  )
};
export default Eventger;
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const Portfolio = (props) => {
  return (
        <div>
         <ul className="ul">
        <li>
          Containerized frontend and backend with Docker.
        </li>
        <li>
        Containers deployed to AWS EC2 via AWS ECS and ECR.
        </li>
       <li>
         Nginx reverse proxy to serve frontend static assets on page reload.
       </li>
        <li>
          Frontend built using React, React Router 4, Webpack and Babel.
        </li>
        <li>
         Apigee API proxy with concurrent rate limit, spike arrest and API key.
        </li>
        <li>
          Backend built using Flask, PostgresSQL, SQLAlchemy and the Alembic migration tool.
        </li>
        <li>
        Registered domain via AWS Route 53 and acquired SSL certificate through the AWS Certificate Manager.
        </li>
       </ul>
         </div>
  )
};
export default Portfolio;
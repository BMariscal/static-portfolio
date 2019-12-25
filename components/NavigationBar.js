import React from "react";
import Projects from "./Projects";
import Main from "./Main";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Navbar,
  Nav
  } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


const  NavigationBar  = ()=> {
    return (
        <div className="navbar card1">
          <Navbar.Brand href="/">
            <LinkContainer to="/">
              <a className="navbar-brand" href="/" className="name-title">
                <h4> Briceida Mariscal</h4>
              </a>
            </LinkContainer>
          </Navbar.Brand>
            <Nav className="mr-auto" id="bg">
            </Nav>
        </div>
    );
}

export default NavigationBar;

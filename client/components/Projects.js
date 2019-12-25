import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import Eventger from "./projects/Eventger";
import Sesame from "./projects/Sesame";
import Portfolio from "./projects/Portfolio";

class Projects extends React.Component{
  constructor(props) {
    super(props);
    this.state = {sesame: false,
        portfolio: false,
        eventger: false
        };
  }

  showProject(projectName){
    if (this.state.sesame && projectName == "sesame"){
     setTimeout(
        function() {
        this.setState({sesame: false});
            }
        .bind(this),
        0
        );
    }
     else if (this.state.eventger && projectName == "eventger"){
     setTimeout(
        function() {
        this.setState({eventger: false});
            }
        .bind(this),
        0
        );
    }
   else if (this.state.portfolio && projectName == "portfolio"){
     setTimeout(
        function() {
        this.setState({portfolio: false});
            }
        .bind(this),
        0
        );
    }
   else if (!this.state.portfolio && projectName == "portfolio"){
        this.setState({portfolio: true})
    }
    else if (!this.state.eventger && projectName == "eventger"){
        this.setState({eventger: true})

    }
   else{

        this.setState({sesame: true})
   }
  }

  render() {
  return (
     <div id="projects-div dark-mode project-list projects">
          <section>
        <div className="container" id="projects">
          <div className="button0 button1 card brd">
            <div className="col text-center">
            <h2 className="big-tag1">Projects</h2>
      <section>
        <div className="container" id="projects">
          <div className="button0 button1 brd pro">
            <div className="col text-center">
                  <div>
                  <h3>Personal Website</h3>
                  <h5>Dockerized full stack React/Flask project deployed to AWS</h5>
                  <h5>September 2019</h5>
                  <h6> <a href="https://github.com/BMariscal/portfolio" target="_blank">Github repo</a></h6>
                 <br/>
               <div className="growimg">
               <a  target="_blank">
                 <img src="https://camo.githubusercontent.com/7e4ea4617e7dcc162a47e24de68c35c27db3148b/68747470733a2f2f692e6962622e636f2f5356336a3233472f53637265656e2d53686f742d323031392d31322d32322d61742d352d31372d33322d504d2e706e67" alt="eventger demo"/>
                </a>
              </div>

                </div>
            <div>
                <br/>
                 {this.state.portfolio ? <div> <Portfolio/> <div className="growimg" onClick={()=> this.showProject("portfolio")}> <Button variant="light"><h7> Hide Details</h7></Button></div> </div>: <div className="growimg" onClick={()=> this.showProject("portfolio")}> <Button variant="light"><h7> Project Details</h7></Button></div>}
             </div>
     </div>
    </div>
    </div>
    </section>
        <section>
        <div className="container" id="projects">
          <div className="button0 button1 brd pro">
            <div className="col text-center">
               <div>
              <h3>Eventger</h3>
             <h5> Full stack JavaScript event aggregator</h5>
             <h5>December 2017</h5>
              <h6> <a href="https://github.com/BMariscal/Eventger" target="_blank">Github repo</a></h6>
            <div className="growimg">
               <a  href="https://www.youtube.com/embed/zNGmNVQcW88" target="_blank">
                 <img src="https://i.imgur.com/hTQZe6i.png" alt="eventger demo"/>
                </a>
              </div>
                 <br/>
            <div>
                 {this.state.eventger ? <div> <Eventger/> <div className="growimg" onClick={()=> this.showProject("eventger")}> <Button variant="light"><h7> Hide Details</h7></Button></div> </div>: <div className="growimg" onClick={()=> this.showProject("eventger")}> <Button variant="light"><h7> Project Details</h7></Button></div>}


              </div>
              </div>
     </div>
    </div>
    </div>
    </section>
      <section>
        <div className="container" id="projects">
          <div className="button0 button1 brd pro">
            <div className="col text-center">
            <div>
                  <h3>Sesame</h3>
                 <h5> Full stack JavaScript application to help those <br/> who've experienced human trafficking or domestic violence</h5>
                 <h5>December 2017</h5>
                  <h6> <a href="https://github.com/HRSF84-Pluto/Sesa.me">Github repo</a></h6>
         <div className="growimg">
            <a  href="https://www.youtube.com/watch?v=NY--oEKsE5k" target="_blank">
             <img src="https://i.imgur.com/LpLL7Ds.png" alt="sesame demo"/>
            </a>
          </div>
             <br/>
         <div>
                 {this.state.sesame ? <div> <Sesame/> <div className="growimg" onClick={()=> this.showProject("sesame")}> <Button variant="light"><h7> Hide Details</h7></Button> </div> </div>: <div className="growimg" onClick={()=> this.showProject("sesame")} > <Button variant="light"><h7>Project Details</h7> </Button></div>}
             </div>
          </div>
     </div>
    </div>
    </div>
    </section>
     </div>
    </div>
    </div>
    </section>

    </div>
  );
}
};

export default Projects;

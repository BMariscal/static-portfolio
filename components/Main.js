import React from "react";
import Projects from './Projects';
import Misc from './Misc';
import NavigationBar from "./NavigationBar";


const Main = () => {
  return (
    <div>
       { <NavigationBar/>}
      <section id="aboutme">
        <div className="row first-section">
          <div class="col-xs-1 col-md-1">
          </div>
        <div class="col-xs-9 col-md-5 brd">
                                  <img
        className="img-fluid card2"
        src="https://i.imgur.com/JXQt1mi.png"
        alt="me-again"></img>
          </div>
          <div class="col-xs-4 col-md-5 text-center">

                  <h2> Briceida </h2>
                  <h3> (Bree-say-dah) </h3>
                  <p>
                    Hey! I'm Briceida but I often go by Bri/Brie.
                    I'm a software developer in San Francisco.
                    You can read more about my software engineering journey <a href="https://medium.com/engineers-optimizely/from-security-guard-to-backend-engineer-how-the-i-own-it-scholarship-changed-my-life-ebf1d370ffc3"> <i style={{weight: "300", color: "#6517b8"}}>here.</i> </a>
                   <br/>
                    <br/>
                    In my spare time, I volunteer as a mentor minorities in tech, draw, and paint miniatures.
                    <br/>
                    <br/>
                    Check out my personal <a href="#projects" style={{weight: "300", color: "#6517b8"}}> <b>projects</b>, </a> and other <a href="#misc" style={{weight: "300", color: "#6517b8"}}> <b>things I've recently done.</b> </a>
                  </p>
                   <div className="social-media">
                <a
                  style={{
                    color: "#35393c",
                    fontFamily:
                      "Lato, PingFang SC, Microsoft YaHei, sans-serif;"
                  }}
                  className="btn btn1"
                  href="https://www.linkedin.com/in/briceida-mariscal/"
                  target="_blank"
                >
                 LinkedIn
                </a>

                <a
                  style={{
                    color: "#35393c",
                    fontFamily:
                      "Lato, PingFang SC, Microsoft YaHei, sans-serif;"
                  }}
                  className="btn btn1"
                  href="https://www.github.com/BMariscal/"
                  target="_blank"
                >
                  GitHub
                </a>

                <a
                  style={{
                    color: "#35393c",
                    fontFamily:
                      "Lato, PingFang SC, Microsoft YaHei, sans-serif;"
                  }}
                  className="btn btn1"
                  href="https://twitter.com/briceidamars"
                  target="_blank"
                >
                  Twitter
                </a>
                <a
                  style={{
                    color: "#35393c",
                    fontFamily:
                      "Lato, PingFang SC, Microsoft YaHei, sans-serif;"
                  }}
                  className="btn btn1"
                  href="https://deviantart.com/bmariscal/"
                  target="_blank"
                >
                  DeviantArt
                </a>
              </div>
          </div>
        </div>
       {<Projects/>}
       {<Misc/>}
      </section>
      <footer>
          <div className="text-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=briceidamariscal@gmail.com"
            target="_blank">
            created by Briceida
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Main;

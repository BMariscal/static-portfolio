import React from "react";

const Album = () => {
  return (
    <div id="projects-div">
      <section>
        <div className="card brd container" id="misc">
            <div className="text-center">
              <h2 className="big-tag1">ETc.</h2>
              <div className="r align-items-center justify-content-around container-fluid ">
                <div className="text-center section justify button0">
                  <h5>2019 PyCon Cleveland speaker <br/> PyCon Charlas</h5>
                  <h6> <a href="https://us.pycon.org/2019/speaker/profile/859/#!">Talk</a></h6>
                  <ul>
                 </ul>
                  <h5>CompTIA Network+ certification</h5>
                 <h6>Entry-level IT certification</h6>
                  <h6> <a href="https://i.imgur.com/fwyNkc0.png">Certificate</a></h6>
                  <h6> Concepts covered on the exam <a href="https://www.professormesser.com/network-plus/n10-007/n10-007-training-course/"><i>here. </i></a>
                  </h6>
                 <ul>
                </ul>
                  <div className="hedgy">
                <a href="#aboutme">
               <img src="https://i.imgur.com/Jp8xeEo.png" alt="hedgy-deserves-respect" title="hedgy loves you" height="150" width="200"/>
                </a>
                  </div>
                </div>
            </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Album;
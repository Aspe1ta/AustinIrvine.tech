import React from "react";
import "./App.scss";

import Home from "./components/home/home.js";

import "bootstrap/dist/css/bootstrap.min.css";
import Poster from "./assets/poster.jpeg";
import Video from "./assets/background.mp4";

let name = "<Austin Irvine/>";

class App extends React.Component {
  render() {
    return (
      <>
        {/* HOMEPAGE */}

        {/* videobox start */}
        <div className="videobox">
          {/* overlay start */}
          <div className="reveal slide-out-bck-center">
            <div className="loadBox ">
              <div className="lds-css ng-scope rotate-out-center">
                <div className="lds-double-ring">
                  <div></div>
                  <div></div>
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <video
            className="video"
            src={Video}
            poster={Poster}
            muted
            autoPlay
            loop
          />
          <div className="austinLogo">
            <h1 class="glitch" data-text="<Austin Irvine/>">
              {name}
            </h1>
          </div>
          {/* videobox end */}
        </div>

        <Home></Home>
      </>
    );
  }
}

export default App;

import React from "react";
import "./portfolio.scss";
import Carousel from "react-bootstrap/Carousel";
import Fight from "./../../assets/Find.png";
import Git from "./../../assets/Git.jpg";
import Design from "./../../assets/Design.png"

class Portfolio extends React.Component {
  render() {
    return (
      <>
        <div className="portfolioBackdrop">
          <h1 className="heading white">Portfolio</h1>
          <h3 className="Subheading white">I built this site in React.js, But here you can see some of my other projects </h3>
          <div className="carContain">
            <Carousel className="carSize">
              <Carousel.Item className="itemSize">
                <a
                  href="https://findyourfight.herokuapp.com"
                  className="carLinkBox"
                >
                  <img
                    className="d-block imageSize "
                    src={Fight}
                    alt="First slide"
                  />
                </a>
                <Carousel.Caption>
                  <h3 className="carHead">Find Your Fight</h3>
                  <p className="carDesc white">
                    Find your fight is a webapp for desktop that helps people who enjoy
                    fighting games find fighting game events, tournaments and
                    local gatherings near them. It does this by crowd-sourcing
                    the locations and events from event organizers who register
                    their event on the site.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className="itemSize">
                <a href="https://github.com/Aspe1ta" className="carLinkBox">
                  <img
                    className="d-block imageSize "
                    src={Git}
                    alt="2nd slide"
                  />
                </a>
                <Carousel.Caption>
                  <h3 className="carHead" >My Github</h3>
                  <p className="carDesc white">
                    Check out what I'm currently working on.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className="itemSize">
                <a href="https://austin.pb.design/digitalmedia" className="carLinkBox">
                  <img
                    className="d-block imageSize "
                    src={Design}
                    alt="2nd slide"
                  />
                </a>
                <Carousel.Caption>
                  <h3 className="carHead">Design Work</h3>
                  <p className="carDesc white">
                    Here you can see my site for design work
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;

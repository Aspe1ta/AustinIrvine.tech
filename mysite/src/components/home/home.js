import React from "react";
import "./home.scss";
import "./../portfolio/portfolio.scss";
import Bar from "./../navbar/navbar";
import Portfolio from "./../portfolio/portfolio";
import About from "./../about/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./../contact/Contact";
import MidNav from "./../midNav/MidNav.js";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import ArrowW from "./../../assets/arrowwhite.png";
import ArrowB from "./../../assets/arrowblack.png";


let name = "<Austin Irvine/>";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }
  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToLength() {
    scroll.scrollTo(100);
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      <>
        {/* HOMEPAGE */}

        {/* videobox start */}
        <div className="videobox">
          {/* overlay start */}

          <div className="overlay">
            <Element name="AboutBox" className="AboutBox" id="AboutBox">
              <div className="navBox slide-in-top">
                <Link
                  activeClass="active"
                  className="linkBox"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={2000}
                  containerId="AboutBox"
                >
                  <h3 className="navText white">About Me</h3>
                </Link>

                <Link
                  activeClass="active"
                  className="linkBox"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={2000}
                  containerId="AboutBox"
                >
                  <h3 className="navText white">Portfolio</h3>
                </Link>

                <Link
                  activeClass="active"
                  className="linkBox"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={2000}
                  containerId="AboutBox"
                >
                  <h3 className="navText white">Contact</h3>
                </Link>
              </div>

              <div className="arrowContain">
              
              <div className="triangle heartbeat">
                  
              <Link
                activeClass="active"
                className="arrowBox rotate"
                to="gradient"
                spy={true}
                smooth={true}
                offset={0}
                duration={3000}
                containerId="AboutBox"
              >
                <h2 className='triText text-focus-in' id='blackText'>Shall We?</h2>
                <div className="text-focus-in">
                  <img src={ArrowW} className="arrowImg invert" />
                </div>
              </Link>
              
              </div>
              </div>

              <Element name="gradient" className="gradient">
                <div className="howdyBox">
                  <h1 class="glitch" data-text="Howdy, I'm">
                    {"Howdy, I'm"}
                  </h1>
                </div>
                <Link
                  activeClass="active"
                  className="blackArrowBox"
                  to="Who"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={3000}
                  containerId="AboutBox"
                > 
                <Element name= "Who"></Element>
                  <h3 id="blackText">Who Am I?</h3>
                  <div className="heartbeat">
                    <img src={ArrowB} className="arrowImg" />
                  </div>
                </Link>
              </Element>

              <Element name="intro" className="intro">
                <div>
                  <h2 className="introText black">I’m a Full Stack Developer with a background in the Trifecta that is Development, Design, and Business. </h2>
                </div>
                <Link
                  activeClass="active"
                  className="blackArrowBox"
                  to="midNav"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={3000}
                  containerId="AboutBox"
                >
                  <h3 id="blackText">Interested?</h3>
                  <div className="heartbeat">
                    <img src={ArrowB} className="arrowImg" />
                  </div>
                </Link>
              </Element>

              <Element name="midNav" className="element"></Element>
              <MidNav></MidNav>

              <Element name="about" className="element">
                <div></div>
              </Element>

              <About></About>

              

              <div className="gradientBlack"> </div>
              <Element name="portfolio" className="element">
                <div></div>
              </Element>
              <Portfolio></Portfolio>

              

              <div className="gradientReverse"> </div>

              <Element name="contact" className="element">
                <div></div>
              </Element>

              <Contact></Contact>
            </Element>

            {/* overlay end */}
          </div>

          {/* videobox end */}
        </div>

        {/* HOMEPAGE END */}
      </>
    );
  }
}

export default Home;

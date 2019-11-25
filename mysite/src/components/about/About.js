import React from "react";
import "./About.scss";
import Me from "./../../assets/mePic.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import Waterloo from "./../../assets/Waterloo.png";
import Brainstation from "./../../assets/Brainstation.png";
import {
  
  Element,
  
  animateScroll as scroll,
  
} from "react-scroll";


let name = "Howdy, I'm";

class About extends React.Component {
  
  render() {
    return (
      <>
        <Element name="aboutBackdrop" className="aboutBackdrop">
          <div className="firstBlock">
            <h1 className="heading">More About Me</h1>

            <div className="blockBox">
              <ScrollAnimation
                animateIn="bounceInLeft"
                scrollableParentSelector="#AboutBox"
                delay={500}
                className="meBoxLeft"
              >
                <img src={Me} className="meImg" />
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="bounceInRight"
                scrollableParentSelector="#AboutBox"
                delay={1000}
                className="description"
              >
                <p>Howdy, I'm Austin. Thats me with the headphones.</p>
                <p>
                  I’ve always had a love for creation, be it websites, videos,
                  music, and design.
                </p>
                <p>
                  The main reason I became a developer was because of my design
                  work. I loved ideating and designing concepts, but I always
                  got frustrated that it would stop there. I wanted to be able
                  to build out my ideas and make them a reality. This ended up
                  leading me down the road of becoming a developer.
                </p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="firstBlock">
            <div className="blockBox">
              <ScrollAnimation
                animateIn="bounceInLeft"
                scrollableParentSelector="#AboutBox"
                delay={1000}
                className="description"
              >
                <p>
                If you’re reading this, it means I’m almost finished my last year at the University of Waterloo.
                </p>
                <p>
                As a student at the University of Waterloo's School of Interaction Design and Business. I was able to study UI and UX design and intermediated web development. As a result of this, I was able to create intuitive user experiences and design concepts, but I wanted to be able to see my designs become real concepts. Which lead me to Brainstation, where my career as a full-stack developer started.
                </p>
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="bounceInRight"
                scrollableParentSelector="#AboutBox"
                delay={500}
                className="meBoxRight"
              >
                <img src={Waterloo} className="meImg" />
                <img src={Brainstation} className="meImg" />
              </ScrollAnimation>
            </div>
          </div>
        </Element>
      </>
    );
  }
}

export default About;

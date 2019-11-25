import React from "react";
import "./MidNav.scss";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class MidNav extends React.Component {
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
        <Link
          activeClass="active"
          className="portfolioBackground2"
          to="aboutBackdrop"
          spy={true}
          smooth={true}
          offset={-40}
          duration={2000}
          containerId="AboutBox"
        >
          <div className="headerBox">
            <h1 class="glitch twoEm" data-text="More About Me">
              More About Me
            </h1>
            {/* overlay end */}
          </div>
        </Link>

        <Link
          activeClass="active"
          className="portfolioBackground"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-40}
          duration={2000}
          containerId="AboutBox"
        >
          <div className="headerBox">
            <h1 class="glitch twoEm" data-text="Portfolio">
              Portfolio
            </h1>
            {/* overlay end */}
          </div>
        </Link>

        <Link
          activeClass="active"
          className="portfolioBackground3"
          to="contact"
          spy={true}
          smooth={true}
          offset={-40}
          duration={2000}
          containerId="AboutBox"
        >
          <div className="headerBox">
            <h1 class="glitch twoEm" data-text="Contact Me">
              Contact Me
            </h1>
            {/* overlay end */}
          </div>
        </Link>
      </>
    );
  }
}

export default MidNav;

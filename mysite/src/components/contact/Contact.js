import React from "react";
import "./Contact.scss";
import Navbar from "./../navbar/navbar.js";
import Email from "./../../assets/email.png";
import LinkedIn from "./../../assets/Linkedin.png";

class Contact extends React.Component {
  render() {
    return (
      <>
        

            <div className="contactBox">
              <div className="contactHeader">

              
                <h1 class="glitch" data-text="Contact">
                  Contact
                </h1>
              
              </div>

              <div className="contactLinks">
                <a href="mailto: ausy11@live.ca" className="contactLinkBox">
                  <img src={Email} className="slide-in-bottom" />
                </a>

                <a
                  href="https://www.linkedin.com/in/austin-irvine-82a7aa14a/"
                  className="contactLinkBox"
                >
                  <img src={LinkedIn} className="slide-in-bottom" />
                </a>
              </div>
              {/* overlay end */}
              </div>
          
      </>
    );
  }
}

export default Contact;

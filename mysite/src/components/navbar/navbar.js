import React from "react";
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
import './navbar.scss';
import { Link } from 'react-router-dom';



class Bar extends React.Component {

  render() {
    return (
      <>
      <div className='navBox'>
        
        <a href="#about" className="linkBox" >
        <h3>About Me</h3>
        </a>

        <Link className="linkBox" to={"/Portfolio"}>
        <h3>Portfolio</h3>
        </Link>

        <Link className="linkBox" to={"/Contact"}>
        <h3>Contact</h3>
        </Link>
        

      </div>
      </>
    );
  }
}

export default Bar;

import logo from 'assets/img/logo.png';
//import logo from 'assets/img/logo.png';
import React from "react";
// reactstrap components
import { } from "reactstrap";
import { } from "./AboutUs.css";
import { NavLink } from 'react-router-dom';

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          {/* CODE GOES HERE INSIDE THE <DIV> */}
          <div id="about-us-logo-div">
            <img id="about-us-logo-image" src={logo} alt="Logo" />
          </div>
          <hr />
          <h3 id="ab1">Laurier Robotics</h3>
          <hr />
          <p id="p1">We are a group of students who share a passion for robotics and are dedicated to bring our knowledge and experience into the design and building of our robots. We strive to explore the field of robotics and we love to give the Laurier community opportunities to get involved by offering various workshops and events.</p>
          <hr />
          <h3 id="ab2">Our Mission Statement</h3>
          <hr />
          <p id="p2">Throughout several team meetings and events around the year, team members and students get a chance to design, build and program our robots and learn about the field of robotics. Each team member seeks to learn and grow, brings value not only to the club but also the Laurier community.</p>
          <br />

          <NavLink
            id="pPolicyLink"
            className="nav-link"
            activeClassName="active"
            to={{
              pathname: "/admin/privacyPolicy",
            }}>
            View Privacy Policy
          </NavLink>
        </div>
      </>
    );
  }
}
export default AboutUs;
import React from "react";
import DQ from 'assets/img/DQ.jpg';
import { } from "./Sponsership.css";
// reactstrap components
/*import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";*/

class Sponsership extends React.Component {
  render() {
    return (
      <>
        <div className="content">
        <h2 id="h2">Thank You!</h2>
          <hr />
          <p>We'd love to give a big thank you to our wonderful sponsors that support us!</p>
          <ul>
          <li id="imgStyle">
            <a href="" target="blank">
              <img id='igmedia' src={DQ} alt="DQ logo" />
            </a>
          </li>
        </ul>
          <h2 id="h2">Join Us!</h2>
          <hr />
          <p>Here at Laurier Robotics we are a group of
          like-minded students passionate about technology
          and robotics. If you would like to be part of this
            incredible team please don't hesitate to <a href="/admin/contactus">contact us</a>!</p>
        </div>
      </>
    );
  }
}

export default Sponsership;

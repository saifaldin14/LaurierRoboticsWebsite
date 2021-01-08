import React from "react";
import DQ from "assets/img/DQ.jpg";
import Signs from "assets/img/Signs.png";
import {} from "./Sponsership.css";
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
          <p>
            We'd love to give a big thank you to our wonderful sponsors that
            support us!
          </p>
          <div id="divSponsor">
            <img id="imgSponsor" src={DQ} alt="DQ logo" />
            <img id="imgSponsor" src={Signs} alt="Signs logo" />
          </div>
          {/* <ul id="ul_sponsors">
            <li>
              <img id="imgSponsor" src={DQ} alt="DQ logo" />
            </li>
            <li>
              <img id="imgSponsor" src={Signs} alt="Signs logo" />
            </li>
          </ul> */}
          <h2 id="h2">Join Us!</h2>
          <hr />
          <p>
            Here at Laurier Robotics we are a group of like-minded students
            passionate about technology and robotics. If you would like to be
            part of this incredible team please don't hesitate to{" "}
            <a href="/admin/contactus">contact us</a>!
          </p>
        </div>
      </>
    );
  }
}

export default Sponsership;

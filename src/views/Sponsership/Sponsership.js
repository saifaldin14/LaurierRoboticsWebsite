import React from "react";
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
          {/* CODE GOES HERE INSIDE THE <DIV> */}
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

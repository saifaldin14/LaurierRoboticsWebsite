import React, { useState } from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  UncontrolledAlert,
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { } from './Projects.css';

const Projects = () => {
  const updateData = [
    {
      title: "Update 1",
      description: "This is a description",
    },
    {
      title: "Update 2",
      description: "This is a another description",
    },
    {
      title: "Update 3",
      description: "Yet another description",
    },
    {
      title: "Update 4",
      description: "Final description",
    },
  ]
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5" id="h5">Self-Driving AI Car</CardTitle>
                <p className="card-category" id="project-description">
                  This year we are building a custom self-driving robotics car.
                  We will be designing and implementing a custom neural network, as well
                  as develop the hardware to create a fully functional self-driving car.
                    <br />
                  <br />
                    Please stay tuned as
                    we update you through the progress of this incredible project!
                  </p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h5" id="h5">Project Updates</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Alert color="info">
                          <span>This is a plain notification</span>
                        </Alert>
                        <UncontrolledAlert color="info" fade={false}>
                          <span>
                            This is a notification with close button.
                            </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert
                          className="alert-with-icon"
                          color="info"
                          fade={false}
                        >
                          <span
                            data-notify="icon"
                            className="nc-icon nc-bell-55"
                          />
                          <span data-notify="message">
                            This is a notification with close button and icon.
                            </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert
                          className="alert-with-icon"
                          color="info"
                          fade={false}
                        >
                          <span
                            data-notify="icon"
                            className="nc-icon nc-chart-pie-36"
                          />
                          <span data-notify="message">
                            This is a notification with close button and icon
                            and have many lines. You can see that the icon and
                            the close button are always vertically aligned.
                            This is a beautiful notification. So you don't
                            have to worry about the style.
                            </span>
                        </UncontrolledAlert>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h5" id="h5">Notification states</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <UncontrolledAlert color="primary" fade={false}>
                          <span>
                            <b>Primary - </b>
                              This is a regular notification made with
                              color="primary"
                            </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="info" fade={false}>
                          <span>
                            <b>Info - </b>
                              This is a regular notification made with
                              color="info"
                            </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="success" fade={false}>
                          <span>
                            <b>Success - </b>
                              This is a regular notification made with
                              color="success"
                            </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="warning" fade={false}>
                          <span>
                            <b>Warning - </b>
                              This is a regular notification made with
                              color="warning"
                            </span>
                        </UncontrolledAlert>
                        <UncontrolledAlert color="danger" fade={false}>
                          <span>
                            <b>Danger - </b>
                              This is a regular notification made with
                              color="danger"
                            </span>
                        </UncontrolledAlert>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Projects;

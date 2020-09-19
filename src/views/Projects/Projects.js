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
import { updateData, projectStageData } from './ProjectData';
import { } from './Projects.css';

const Projects = () => {

  const renderUpdate = (update) => {
    return (
      <UncontrolledAlert
        color={update.color}
        fade={false}
      >
        <span data-notify="message">
          {update.message}
        </span>
      </UncontrolledAlert>
    );
  };

  const renderStage = (stage) => {
    return (
      <Alert color={stage.color} fade={false}>
        <span>
          <b>{stage.title}</b>
          {stage.text}
        </span>
      </Alert>
    );
  }

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
                        {updateData.map(renderUpdate)}
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h5" id="h5">Project Stages</CardTitle>
                      </CardHeader>
                      <CardBody>
                        {projectStageData.map(renderStage)}
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

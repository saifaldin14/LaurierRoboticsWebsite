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
                We are planning on engineering and designing a self driving toy car. We are 
                implementing computer vision with Python and Tensorflow/Keras to detect multiple 
                objects such as stop signs, traffic lights, other cars, and pedestrians. 
                Our self driving car will be able to make turns on its own and avoid 
                any obstacles in the way. This will all be tested in an environment 
                built completely by our team. Hardware consists of working with Raspberry Pi, 
                Arduino, motors, and etc. While software consists of neural networks and commands 
                for the different actions we want our car to take.
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

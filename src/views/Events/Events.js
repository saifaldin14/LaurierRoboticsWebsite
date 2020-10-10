import React, { useState } from "react";
import { } from "./Events.css";
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import EventDetails from "./EventDetails";
import ReactPlayer from "react-player";
import { cardInfo, videoURL } from './EventsData';
import { flattenDiagnosticMessageText } from "typescript";
const Events = () => {

  const renderCard = (card, index) => {
    return (
      <div className="card" style={{ width: '18rem', margin: '1rem' }} key={index}>
        <img className="card-img-top" src={card.image} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <h6 className="card-text">{card.date}</h6>
          <NavLink
            className="nav-link"
            activeClassName="active"
            to={{
              pathname: "/admin/eventDetails",
              cardProp: {
                // card: card,
                image: card.image,
                title: card.title,
                date: card.date,
                description: card.description
              }
            }}>
            View Details
          </NavLink>
        </div>
      </div>
    );
  };

  const renderVideo = (vid, index) => {
    return (
      <div className="card" style={{ width: '18rem', margin: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={index}>
        <div className="card-body">
          <h5 className="card-title">{vid.title}</h5>
          <hr />
          <ReactPlayer id="video-player" width={"25rem"} height={"20rem"} url={vid.url} controls={true} />
          <hr />
          <h5 className="card-text" id="vid-text">{vid.date}</h5>
          <hr />
          <h5 className="card-text" id="vid-text">{vid.description}</h5>
        </div>
      </div>
    );
  };


  const renderAllItems = () => {
    return (
      <div className="content" id="events-div">
        {cardInfo.map(renderCard)}
      </div>
    );
  }

  const renderNoItems = () => {
    return (
      <div className="content">
        {/* CODE GOES HERE INSIDE THE <DIV> */}
        <h2 id="no-events">There are no events yet</h2>
      </div>
    );
  }

  const renderAllVideo = () => {
    return (
      <div className="content" id="render-video">
        {videoURL.map(renderVideo)}
      </div>
    );
  }

  return (
    <div className="content">
      {/* <BrowserRouter>
        <Switch>
          <Route path="/eventDetails" component={EventDetails} />
        </Switch>
      </BrowserRouter> */}
      {cardInfo.length > 0 && renderAllItems()}
      {cardInfo.length === 0 && renderNoItems()}
      <hr id="border" />
      <h2 id="events-h2">Past Events</h2>
      {renderAllVideo()}
    </div>
  );
}

export default Events;
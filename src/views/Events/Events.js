import React, { useState } from "react";
import { } from "./Events.css";
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import EventDetails from "./EventDetails";
import ReactPlayer from "react-player";
import { cardInfo, videoURL } from './EventsData';
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
      <div className="card" style={{ width: '18rem', margin: '1rem' }} key={index}>
        <div className="card-body">
          <h5 className="card-title">{vid.title}</h5>
          <ReactPlayer width={"18rem"} height={"16rem"} url={vid.url} controls={true} />
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
        <h2 id="events-h2">There are no events yet. Come back again to see anything new</h2>
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
      <h2 id="events-h2">Past Events</h2>
      {renderAllVideo()}
    </div>
  );
}

export default Events;
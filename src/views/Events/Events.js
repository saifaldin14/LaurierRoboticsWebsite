import React, { useState } from "react";
import { } from "./Events.css";
import Modal from 'react-modal';
import { Link, Route, Switch, BrowserRouter, NavLink } from 'react-router-dom';
import EventDetails from "./EventDetails";

const Events = () => {
  // return (
  //   <>
  //     <div className="content">
  //       {/* CODE GOES HERE INSIDE THE <DIV> */}
  //       <h2 id="h2">Coming Soon...</h2>
  //     </div>
  //   </>
  // );
  const cardInfo = [
    {
      image: "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
      title: "Welcome Event",
      date: "September 10 7:00 - 8:00 PM EST",
      description: "First event of the year",
    },
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
      title: "Alex Caruso",
      date: "September 14 6:30 - 7:30 PM EST",
      description: "THE TRUE GOAT",
    },
    {
      image:
        "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
      title: "Steph Curry",
      date: "October 23 4:00 - 5:00 PM EST",
      description: "he good",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const renderCard = (card, index) => {
    return (
      <div className="card" style={{ width: '18rem', margin: '1rem' }} key={index}>
        <img className="card-img-top" src={card.image} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.date}</p>
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
        <h2 id="events-h2">No events yet</h2>
      </div>
    );
  }

  return (
    <>
      {/* <BrowserRouter>
        <Switch>
          <Route path="/eventDetails" component={EventDetails} />
        </Switch>
      </BrowserRouter> */}
      {cardInfo.length > 0 && renderAllItems()}
      {cardInfo.length === 0 && renderNoItems()}
    </>
  );
}

export default Events;
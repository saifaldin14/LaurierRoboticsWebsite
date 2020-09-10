import React, { useState } from "react";
import { } from "./Events.css";
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
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
    // {
    //   image: "https://cdn.eventplanner.net/imgs/xnr6226_6-tips-to-make-your-online-participants-feel-welcome-in-a-hybrid-event.jpg",
    //   title: "Welcome Event",
    //   date: "September 10 7:00 - 8:00 PM EST",
    //   description: "First event of the year",
    // },
    // {
    //   image: "https://d1hks021254gle.cloudfront.net/wp-content/uploads/2019/10/060-ARGO-COLONYB-10467-Sept-AWA-Cont-Hub-Story-Successful-Meeting-header-1200x675-1024x576.jpg",
    //   title: "Robot Strategy Meeting",
    //   date: "September 14 6:30 - 7:30 PM EST",
    //   description: "Meeting to discuss the strategy and timeline for building the robot",
    // },
    // {
    //   image: "https://res.cloudinary.com/engineering-com/image/upload/w_640,h_640,c_limit,q_auto,f_auto/bigstock-Architect-Engineer-Meeting-Peo-101361728_oxgf0s.jpg",
    //   title: "Hardware Team Meeting",
    //   date: "October 23 4:00 - 5:00 PM EST",
    //   description: "Meeting to discuss 3D model of the robot and budget meeting with the Finance Team",
    // },
  ];

  const [isOpen, setIsOpen] = useState(false);

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
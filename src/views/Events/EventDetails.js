import React, { useState } from "react";
import { } from './EventDetails.css';

const EventDetails = (props) => {
  var s = props.location.cardProp;
  var list = [];

  for (var key in s) {
    if (s.hasOwnProperty(key)) {
      var value = s[key];
      list.push(value);
    }
  }

  // var gapi = window.gapi
  // var CLIENT_ID = "1005883486037-00qdvbf3bdlnrt4d221vhsprgnr2p6us.apps.googleusercontent.com"
  // var API_KEY = "AIzaSyAy4q_pIbJ9ZnoyMJu9Gwkktdu5_zyCcy8"
  // var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  // var SCOPES = "https://www.googleapis.com/auth/calendar.events"

  // const handleClick = () => {
  //   gapi.load('client:auth2', () => {
  //     console.log('loaded client')

  //     gapi.client.init({
  //       apiKey: API_KEY,
  //       clientId: CLIENT_ID,
  //       discoveryDocs: DISCOVERY_DOCS,
  //       scope: SCOPES,
  //     })

  //     gapi.client.load('calendar', 'v3', () => console.log('bam!'))

  //     gapi.auth2.getAuthInstance().signIn()
  //       .then(() => {

  //         var event = {
  //           'summary': list[1],
  //           'location': '800 Howard St., San Francisco, CA 94103',
  //           'description': list[2],
  //           'start': {
  //             'dateTime': '2020-06-28T09:00:00-07:00',
  //             'timeZone': 'America/Los_Angeles'
  //           },
  //           'end': {
  //             'dateTime': '2020-06-28T17:00:00-07:00',
  //             'timeZone': 'America/Los_Angeles'
  //           },
  //           'recurrence': [
  //             'RRULE:FREQ=DAILY;COUNT=2'
  //           ],
  //           // 'attendees': [
  //           //   {'email': 'lpage@example.com'},
  //           //   {'email': 'sbrin@example.com'}
  //           // ],
  //           'reminders': {
  //             'useDefault': false,
  //             'overrides': [
  //               { 'method': 'email', 'minutes': 24 * 60 },
  //               { 'method': 'popup', 'minutes': 10 }
  //             ]
  //           }
  //         }

  //         var request = gapi.client.calendar.events.insert({
  //           'calendarId': 'primary',
  //           'resource': event,
  //         })

  //         request.execute(event => {
  //           console.log(event)
  //           window.open(event.htmlLink)
  //         })
  //         /*
  //         // get events
  //         gapi.client.calendar.events.list({
  //           'calendarId': 'primary',
  //           'timeMin': (new Date()).toISOString(),
  //           'showDeleted': false,
  //           'singleEvents': true,
  //           'maxResults': 10,
  //           'orderBy': 'startTime'
  //         }).then(response => {
  //           const events = response.result.items
  //           console.log('EVENTS: ', events)
  //         })
  //         */

  //       })
  //   })
  // }

  return (
    <div className="content">
      <div id="DetailsImg">
        <img src={list[0]}></img>
      </div>
      <h1 id="DetailsH1">{list[1]}</h1>
      <h2 id="DetailsH2">{list[2]}</h2>
      <p id="DetailsP">
        {list[3]}
      </p>
      {/* Add this later when we have a privacy policy */}
      {/* <button style={{ width: 100, height: 50 }} onClick={handleClick}>Add Event</button> */}
    </div>
  );
}
export default EventDetails;
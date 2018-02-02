import React from 'react';
import Ticket from './Ticket';


var masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '4B',
    issue: 'My internet isnt very netty'
  },
  {
    names: 'Sgt. Slaughter and Killey',
    location: '5C',
    issue: 'My donkey punching app only punches veal'
  },
  {
    names: 'Dog and Cat',
    location: '10A',
    issue: 'I cant understand my partner, they have a ruff accent'
  }
]

function TicketList(){
  var ticketListStyles = {
    backgroundColor: 'skyblue',
    fontFamily: 'sans-serif',
    paddingTop: '100',
    fontStyle: 'italic'
  }

  return(
    <div style={ticketListStyles}>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;

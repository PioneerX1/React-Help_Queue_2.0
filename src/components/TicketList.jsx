import React from 'react';
import PropTypes from 'prop-types';
import Ticket from './Ticket';

function TicketList(props){
  var ticketListStyles = {
    backgroundColor: 'skyblue',
    fontFamily: 'sans-serif',
    paddingTop: '100',
    fontStyle: 'italic'
  };

  return(
    <div style={ticketListStyles}>
      <hr/>
      {props.ticketList.map((ticket, index) =>
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;

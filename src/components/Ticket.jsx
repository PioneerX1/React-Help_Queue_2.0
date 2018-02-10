import React from 'react';
import PropTypes from 'prop-types';


function Ticket(props){
  var ticketStyles = {
    backgroundColor: 'salmon',
    fontStyle: 'bold',
    paddingLeft: 20
  };

  return(
    <div style={ticketStyles}>
      <h3>{props.location} - {props.names}</h3>
      <h4><em>{props.formattedWaitTime}</em></h4>
      <p>{props.issue}</p>
      <hr/>
    </div>
  );
}


Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
};

export default Ticket;

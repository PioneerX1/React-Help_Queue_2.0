import React from 'react';
import PropTypes from 'prop-types';


function Ticket(props){
  var ticketStyles = {
    backgroundColor: 'salmon',
    fontStyle: 'bold',
    paddingLeft: 20
  };

  const ticketInformation =
    <div style={ticketStyles}>
      <h3>{props.location} - {props.names}</h3>
      <h4><em>{props.formattedWaitTime}</em></h4>
      <p>{props.issue}</p>
      <hr/>
    </div>;

    if (props.currentRouterPath === './admin'){
      return(
        <div onClick={() => {alert('You just clicked ticket belonging to ' + props.names);}}>
          {ticketInformation}
        </div>
      );
    } else {
      return(
        <div>
          {ticketInformation}
        </div>
      );
    }
}


Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Ticket;

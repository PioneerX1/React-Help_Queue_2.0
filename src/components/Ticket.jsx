import React from 'react';
import PropTypes from 'prop-types';


function Ticket(props){

  const ticketInformation =
    <div>
      <h3>{props.names} - {props.location}</h3>
      <h4><em>{props.formattedWaitTime}</em></h4>
      <hr/>
    </div>;

    if (props.currentRouterPath === '/admin'){
      return(
        <div onClick={() => {props.onTicketSelection({
            names: props.names,
            location: props.location,
            issue: props.issue,
            formattedWaitTime: props.formattedWaitTime});
          }}>
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
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default Ticket;

import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import Moment from 'moment';


function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, id: v4(), timeOpen: new Moment()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return(
    <div>
      <hr/>
      <h2>Enter your ticket info here: </h2>
      <br/>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}
          />
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}
          />
        <input
          type='text'
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}
          />
        <br/><br/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;

import React from 'react';
import PropTypes from 'prop-types';
import helpDeskPic from '../assets/images/helpdeskpic.jpg';

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return(
    <div>
      <img src={helpDeskPic}/>
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
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;

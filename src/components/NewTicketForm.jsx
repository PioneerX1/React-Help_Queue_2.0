import React from 'react';
import helpDeskPic from '../assets/images/helpdeskpic.jpg';

function NewTicketForm(){

  return(
    <div>
      <img src={helpDeskPic}/>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          />
        <input
          type='text'
          id='location'
          placeholder='Location'
          />
        <input
          type='text'
          id='issue'
          placeholder='Describe your issue.'
          />
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;

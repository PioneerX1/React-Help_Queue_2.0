import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Error404(props){
  console.log("Custom Error Message, woot! " + props);
  return(
    <div>
      <h2>Oops, the page <u>{props.location.pathname}</u> does not exist!</h2>
      <h3>Do you want to return <Link to="/">HOME</Link> instead?</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;

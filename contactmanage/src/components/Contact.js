import React from "react";
import PropTypes from "prop-types";

const Contact = props => {
  const { name, email, phone } = props;
  return (
    <div>
      <h4>{name}</h4>
      <ul>
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
    </div>
  );
};

/*Handles the validation of Props Type*/
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;

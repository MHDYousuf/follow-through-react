import React from "react";

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

export default Contact;

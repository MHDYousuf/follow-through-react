import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { Heading } = props;
  return (
    <div>
      <h1 style={headingStyle}>{Heading}</h1>
    </div>
  );
};

/*Over rides if Properties not given*/
Header.defaultProps = {
  Heading: "my App"
};

/*Handles the validation of Props Type*/
Header.propTypes = {
  Heading: PropTypes.string.isRequired
};

const headingStyle = {
  color: "blue",
  fontSize: 25
};

export default Header;

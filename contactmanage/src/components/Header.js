import React from "react";

const Header = props => {
  const { Heading } = props;
  return (
    <div>
      <h1>{Heading}</h1>
    </div>
  );
};

export default Header;

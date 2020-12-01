import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const BrandButton = ({ color, children }) => {
  return (
    <Button variant="contained" color={color}>
      {children}
    </Button>
  );
};

BrandButton.propTypes = {
  color: PropTypes.string
};

export default BrandButton;

import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const PrivateRoute = ({ isAuthenticated, element }) => {
  return isAuthenticated ? element : <Navigate to="login" />;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

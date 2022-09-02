import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import LoginScreen from "../components/login/LoginScreen";

const PublicRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/" /> : <LoginScreen />;
};

export default PublicRoute;
PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

import React, { useEffect } from "react";
import NavBar from "../components/ui/NavBar";
import { Outlet } from "react-router-dom";
import { useLoading } from "../hooks/useLoading";
import LoadingScreen from "../components/LoadingScreen";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      {/* The outlet is where the child routes are shown */}

      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;

import React, { useEffect } from "react";
import NavBar from "../components/ui/NavBar";
import { Outlet } from "react-router-dom";
import { useLoading } from "../hooks/useLoading";
import LoadingScreen from "../components/LoadingScreen";

const Dashboard = () => {
  const { setImageLoaded, imagesLoaded } = useLoading({
    time: 0,
    hasImages: true,
  });

  useEffect(() => {
    console.log(imagesLoaded);
  }, [imagesLoaded]);

  return (
    <>
      <LoadingScreen display={Number(imagesLoaded)} />
      <div style={{ opacity: Number(imagesLoaded) }}>
        <NavBar />
        {/* outlet es donde se muestra las rutas hijas */}

        <div className="container">
          <Outlet context={setImageLoaded} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

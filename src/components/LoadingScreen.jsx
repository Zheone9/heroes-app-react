import React from "react";
import { FallingLines } from "react-loader-spinner";
import "./styles.css";

const LoadingScreen = ({ display }) => {
  return (
    !display && (
      <div className="div-center">
        <FallingLines
          color="#5c62c5"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      </div>
    )
  );
};

export default LoadingScreen;

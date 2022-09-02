import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  //reemplaza historia del back del navegador, para que no vuelva a mostrar el login si ya se logueo
  const handleClick = () => {
    dispatch({
      type: types.login,
      payload: {
        name: "Jorge",
      },
    });

    navigate("/", { replace: true });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;

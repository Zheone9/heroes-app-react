import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext.jsx";
import DcScreen from "../components/dc/DcScreen.jsx";
import HeroeScreen from "../components/heroes/HeroeScreen.jsx";
import LoadingScreen from "../components/LoadingScreen.jsx";

import MarvelScreen from "../components/marvel/MarvelScreen.jsx";
import SearchScreen from "../components/search/SearchScreen.jsx";

import Dashboard from "./Dashboard.jsx";

import PrivateRoute from "./PrivateRoute.jsx";
import PublicRoute from "./PublicRoute.jsx";

const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute
              isAuthenticated={user.logged}
              element={<Dashboard />}
            />
          }
        >
          {/* rutas hijas */}
          <Route path="/" element={<MarvelScreen />} />
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="heroe/:heroeId" element={<HeroeScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
        </Route>
        <Route
          path="login"
          element={<PublicRoute isAuthenticated={user.logged} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

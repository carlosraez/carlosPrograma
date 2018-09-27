import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({
  component: Component,
  authenticated,
  ...restantes
}) {
  return (
    <Route
      {...restantes}
      render ={props =>
        authenticated === true ?
         (
          <Component {...props} {...restantes} />
        ) :
         (
          <Redirect to="/" />
         )
      }
    />
  );
}

export default PrivateRoute

import React, { useContext } from 'react';
import { AuthContext } from "../contexts/AuthContext";
import { Route, Redirect } from "react-router-dom";

function PublicRoute({
  children, ...rest
}) {
  const { token } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          token
            ? (
              <Redirect
                to={{
                  pathname: '/finder',
                  state: { from: location }
                }}
              />
            ) : (
              children
            ))
      }
    />
  );
}

export default PublicRoute;
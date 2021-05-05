import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props  }) => (
  <Route>
    <>
      {
        props.isLogin === true ?
          <Component {...props} /> : <Redirect to="/signin" />
      }
    </>
  </Route>
)

export default ProtectedRoute;

import React, {
  // useContext
} from 'react'
import {
  Switch, HashRouter,
  // Route
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import routes from './routes'
import Login from "../Views/Login";


const AppRouter = () => {
  // const { role } = useContext(AuthContext);
  // console.log(role)
  return (
    <HashRouter>
      <Switch>
        <PublicRoute path="/login">
          <Login />
        </PublicRoute>
        {
          routes
            // .filter(route => route.roles.includes(role))
            .map(route =>
              <PrivateRoute key={route.path} path={route.path} exact={route.exact}>
                {route.component && <route.component />}
              </PrivateRoute>)
        }
      </Switch>
    </HashRouter>
  )
}
export default AppRouter
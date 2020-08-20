import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { getNavers } from "../naverAPI";

export default function Auth() {
  const [naversData, setNaversData] = React.useState([]);
  React.useEffect(() => {
    getNavers()
      .then(response => setNaversData(response.data))
      .catch(e => console.log(e));
  }, []);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <Home naversData={naversData} setNaversData={setNaversData} />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./Login";
import TestingPages from "../components/ModalDelete"; // Only for view components when creating
import Home from "./Home";


export default function AuthExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/test">
            <TestingPages
              navers={[{ name: "Felipe Domingues" }, { name: "Manuela" }]}
            />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <Home />
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

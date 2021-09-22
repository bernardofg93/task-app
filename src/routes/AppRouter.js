import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { AppTask } from "../AppTask/AppTask";
import { AppTaskRedux } from "../AppTaskRedux/AppTaskRedux";
import { ProyectsReact } from "../ProyectsReact";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/appTask"
            component={AppTask}
          />
          <Route
            exact
            path="/myProyects"
            component={ProyectsReact}
          />

          <Route
            exact
            path="/AppTaskRedux"
            component={AppTaskRedux}
          />
          <Redirect to="/myProyects" />
        </Switch>
      </div>
    </Router>
  )

}

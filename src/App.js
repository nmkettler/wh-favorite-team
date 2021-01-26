import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Visit from "./pages/Visit";
// import components
import Navbar from "./components/Navbar";

function App() {
  document.title = "Man City";
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/visit">
            <Visit />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

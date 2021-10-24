import React from "react";
import "./App.css";
import { GlobalProvider } from "./context";
import Index from "./components/layout/Index";
import Navbar from "./components/layout/Navbar";
import Lyrics from "./components/tracks/Lyrics";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <React.Fragment>
        <GlobalProvider>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/lyrically" exact component={Index} />
              <Route path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </GlobalProvider>
      </React.Fragment>
    </Router>
  );
}

export default App;

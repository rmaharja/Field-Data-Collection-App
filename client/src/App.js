import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllUsers from "./pages/AllUsers";

const App = () => (
    <div>
        <Navbar />
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/allUsers" component={AllUsers} />
            </Switch>
        </Router>
    </div>
);

export default App;

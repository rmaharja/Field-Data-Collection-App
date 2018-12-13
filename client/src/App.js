import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";

const App = () => (
    <div>
        <Navbar />
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    </div>
);

export default App;

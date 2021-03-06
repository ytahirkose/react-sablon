import './App.css';
import Home from "./pages/home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from "./pages/not-found";
import React from "react";
import WinnerPage from "./pages/winner";

function App() {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/home' exact component={Home}/>
                    <Route path='/win' exact component={WinnerPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
);
}

export default App;

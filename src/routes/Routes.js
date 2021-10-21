import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    NotFound,
    Home
} from '/Pages';

const Routes = (
    <Switch>
        <Route exact path="/" name="Home" render={(props) => <Home {...props} />} />
        <Route exact path="/home" name="Home" render={(props) => <Home {...props} />} />
        <Route path="**" title="This page doesn't exist..." render={(props) => <NotFound {...props} />} />
    </Switch>
);

export default Routes;

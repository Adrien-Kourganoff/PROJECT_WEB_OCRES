import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Welcome from './components/welcome';
import Horloge from './components/horloge';

export default () => {
    <Switch>
        <Route path="/" exact component = {Welcome}/>
        <Route path="/test" exact component = {Horloge}/>
    </Switch>
}
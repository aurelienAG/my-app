import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import LodgingsPage from '../pages/LodgingsPage';
import NotFoundPage from '../pages/NotFoundPage';

const Routes = () => {
return (
<Switch>
<Route exact path="/" component={HomePage} />
<Route path="/about" component={AboutPage} />
<Route path="/lodgings" component={LodgingsPage} />
<Route path="*" component={NotFoundPage} />
</Switch>
);
}

export default Routes;
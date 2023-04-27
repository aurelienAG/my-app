import { Route, Switch } from 'react-router-dom'; 

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const Routes = () => {
return (
<Switch>
<Route exact path="/" component={HomePage} />
<Route path="/about" component={AboutPage} />
<Route path="/lodgins" component={ContactPage} />
<Route path="/error" component={NotFound} />
</Switch>
);
}
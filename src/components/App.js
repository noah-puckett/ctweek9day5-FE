import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
// import CreateHabit from '../containers/CreateHabit';
import { withSession } from '../Auth0Provider';
import { Home } from '../containers/Home';

export default function App() {
    return (<>
        <Router>
            <Switch>
                {/* <Route exact path='/' component={withSession(CreateHabit)}></Route> */}
                <Route exact path ='/' component={withSession(Home)} />
            </Switch>

        </Router>

    </>) ;
}

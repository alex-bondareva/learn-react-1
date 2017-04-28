import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/App';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import './index.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
render(
    <div>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
                <Route path='about' component={About} />
                <Route path='contacts' component={Contacts} />
            </Route>
        </Router>
    </div>,
    document.getElementById('root')
)

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Component2 from './components/component2/component2';

function Location() {
    return (
        <div className='main-container'>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/2' component={Component2} />
            </Switch>
        </div>
    )
}

export let mainAppOutput = () => {
    ReactDOM.render(
        <BrowserRouter><Location /></BrowserRouter>
        , document.getElementById('root')
    );
}
mainAppOutput();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

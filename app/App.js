import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Main from './pages/Main';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HomePage />
                <Main />
            </div>

        )
    }
}
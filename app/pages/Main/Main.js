import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from '../../Components/Login';
import Signup from '../../Components/Signup';

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                </Switch>
            </main>
        )
    }
}
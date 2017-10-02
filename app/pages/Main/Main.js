import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from '../../Components/Login';
import Signup from '../../Components/Signup';
import HomePage from '../../pages/HomePage';
import CourseVideos from '../../pages/CourseVideos';
import Course from '../../Components/Course';
import Tutorform from '../../Components/Tutorform';

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/course' component={Course} />
                    <Route path='/coursevideo' component={CourseVideos} />
                    <Route path='/tutorform' component={Tutorform} />
                </Switch>
            </main>
        )
    }
}
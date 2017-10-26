import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../../Components/Login';
import Signup from '../../Components/Signup';
import About from '../../Components/About';
import HomePage from '../../pages/HomePage';
import CourseVideos from '../../pages/CourseVideos';
import Course from '../../Components/Course';
import Tutorform from '../../Components/Tutorform';
import Dashboard from "../HomePage/dashboard";

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' render={(props) => ( <HomePage addSteps={this.props.addSteps}/> )} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/about' component={About} />
                    <Route path='/course' component={Course} />
                    <Route path='/coursevideo' component={CourseVideos} />
                    <Route path='/tutorform' component={Tutorform} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/courseTutorView' component={Tutorform} />
                </Switch>
            </main>
        )
    }
}
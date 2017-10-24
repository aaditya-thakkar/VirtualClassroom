import React from 'react';
import { Route, Switch } from 'react-router-dom'
import AddCourseForm from '../../Components/AddCourseForm';
import MyCourses from '../../Components/MyCourses';

export default class DashboardItems extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/dashboard' component={MyCourses} />
                    <Route exact path='/dashboard/addCourseForm' component={AddCourseForm} />
                </Switch>
            </main>
        );
    }
};

import React from 'react';
import { Route, Switch } from 'react-router-dom'
import DashboardButtons from '../../Components/DashboardButtons';
import AddCourseForm from '../../Components/AddCourseForm';
import MyCourses from '../../Components/MyCourses';

export default class DashboardItems extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/dashboard' component={DashboardButtons} />
                    <Route exact path='/dashboard/addCourseForm' component={AddCourseForm} />
                    <Route exact path='/dashboard/myCourses' component={MyCourses} />
                </Switch>
            </main>
        );
    }
};

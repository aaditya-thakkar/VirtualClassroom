import React from 'react';
import Introduction from './introduction';
import Courses from './courses';
import Dashboard from './dashboard';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Introduction />
                </div>
                <br /><br />
                <center><h4>Our Offerings</h4></center>
                <div className='divider' />
                <div>
                    <Courses />
                </div>
            </div>
        );
    }
};
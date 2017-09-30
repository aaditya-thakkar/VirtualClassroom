import React from 'react';
import Introduction from './introduction';
import Courses from './courses';


const buttonStyle = {
    margin: '25px 10px 10px 0'
};

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Introduction />
                </div>
                <br /><br /><br /><br /><br /><br />
                <div>
                    <Courses />
                </div>
            </div>
        );
    }
};
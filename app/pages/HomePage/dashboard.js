import React from 'react';
import { Link } from 'react-router-dom';
import Card from './card';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div className="home-img">
                    <div className="text-over">
                        <h2>Instructor Dashboard</h2>
                    </div>
                </div>
                <center>
                    <div className="row card-align">
                        <div className="col s3" style={{marginLeft: "300px", paddingLeft: "100px", paddingTop:"40px"}}>
                            <Card noCourseLink course={{ name: 'Add Course', image: 'app/pages/HomePage/course-images/data_structure.jpg' }} />
                        </div>
                        <div className="col s3" style={{paddingLeft: "100px", paddingTop:"40px"}}>                
                            <Card noCourseLink course={{ name: 'My Courses', image: 'app/pages/HomePage/course-images/data_structure.jpg' }} />
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}
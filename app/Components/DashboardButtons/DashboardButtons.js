import React from 'react';
import Card from '../../pages/HomePage/card';

export default class DashboardItems extends React.Component {
    render() {
        return (
            <div>
                <center>
                    <div className="row card-align">
                        <div className="col s3" style={{marginLeft: "300px", paddingLeft: "100px", paddingTop:"40px"}}>
                            <Card link={'/dashboard/addCourseForm'} course={{ name: 'Add Course', image: 'app/pages/HomePage/course-images/data_structure.jpg' }} />
                        </div>
                        <div className="col s3" style={{paddingLeft: "100px", paddingTop:"40px"}}>
                            <Card link={'/dashboard/myCourses'} course={{ name: 'My Courses', image: 'app/pages/HomePage/course-images/data_structure.jpg' }} />
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}
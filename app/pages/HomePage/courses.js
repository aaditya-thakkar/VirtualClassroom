import React from 'react';
import Card from './card'

export default class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [
                {
                    name : "Data Structures",
                    image : '/app/pages/HomePage/course-images/data_structure.jpg'
                },
                {
                    name : "Cyber Security",
                    image : '/app/pages/HomePage/course-images/cybersecurity.jpg'
                },
                 {
                    name : "Software Engg",
                    image : '/app/pages/HomePage/course-images/software_engineering.jpg'
                },
                {
                    name : "Deep Learning",
                    image : '/app/pages/HomePage/course-images/deep_learning.jpg'
                },
                 {
                    name : "Game Development",
                    image : '/app/pages/HomePage/course-images/game_development.png'
                },
                
                {
                    name : "Networking",
                    image : '/app/pages/HomePage/course-images/networking.jpg'
                },
                {
                    name : "Machine Learning",
                    image : '/app/pages/HomePage/course-images/machine_learning.jpg'
                },
                 {
                    name : "Big Data",
                    image : '/app/pages/HomePage/course-images/Big_Data.jpg'
                },
                ]
        }
    }
    render() {
        return (
            <div className="row card-align">
                {this.state.courses.map((item,i) => {
                    return (<div key={i} className="col s3" style={{paddingLeft:"25px", paddingTop:"20px"}}>
                        <Card course={item} />
                    </div>
                    )
                })}
            </div>
        );
    }
}
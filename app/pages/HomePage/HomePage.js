import React from 'react';
import Introduction from './introduction';
import Courses from './courses';

export default class HomePage extends React.Component {
    render() {
        if(localStorage.getItem('IS_TUTOR') === 'true'){
            return(
                <div>
                
                <br /><br />
                <center><h2>Tutor Dashboard</h2></center>
                <br />
                <div className='divider' />
                <br />
                
            </div>
            );
            
        }
        else{
            return (
                
                <div>
                    <div>
                        <Introduction />
                    </div>
                    <br /><br />
                    <center><h4>Our Offerings</h4></center>
                    <br />
                    <div className='divider' />
                    <br />
                    <div>
                        <Courses />
                    </div>
                </div>
            );
        }
        
    }
};
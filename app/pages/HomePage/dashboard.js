import React from 'react';
import DashboardItems from '../../Components/DashboardItems';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div className="home-img">
                    <div className="text-over">
                        <h2>Instructor Dashboard</h2>
                    </div>
                </div>
                <DashboardItems />
            </div>
        );
    }
}
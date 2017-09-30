import React from 'react';
import Navigation from './pages/HomePage/navigation';
import Main from './pages/Main';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <Main />
            </div>

        )
    }
}
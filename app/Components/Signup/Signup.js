import React from 'react';

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

export default class Signup extends React.Component {
    render() {
        return (
            <div className="column">
                <div className="row-md-3">
                    <input
                        type="text"
                        placeholder="Search signup..."
                        ref="filterTextInput"
                    />
                </div>
                <div className="row-md-3">
                    <input
                        type="text"
                        placeholder="Search..."
                        ref="filterTextInput"
                    />
                </div>
                <div className="row-md-3">
                    <input
                        type="text"
                        placeholder="Search..."
                        ref="filterTextInput"
                    />
                </div>
                <div className="row-md-3">
                    <button
                        className="btn btn-default"
                        style={buttonStyle}
                    >Sign Up</button>
                </div>
            </div>
        );
    }
}
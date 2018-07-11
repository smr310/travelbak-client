import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
    return (
        <div className="main-div">
            <button>Add New Trip</button>
            <h3>Past Trips</h3>
            <div className="trip">TripA</div>
            <div className="trip">TripB</div>
            <div className="trip">TripC</div>
        </div>
    );
};
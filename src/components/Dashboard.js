import React from 'react';
import './Dashboard.css';
import PastTrips from './PastTrips';

export default function Dashboard() {
    return (
        <div className="main-div">
            <button>Add New Trip</button>
            <PastTrips />
        </div>
    );
};
import React from 'react';
import './Dashboard.css';
import PastTrips from '../containers/PastTrips';
import Trip from '../containers/Trip'

export default function Dashboard(props) {
    return (
        <div className="main-div">
      
            <PastTrips history={props.history}/>
        </div>
    );
};
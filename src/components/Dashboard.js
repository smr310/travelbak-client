import React from 'react';
import './Dashboard.css';
import PastTrips from './PastTrips';
import Trip from './Trip'

export default function Dashboard(props) {
    return (
        <div className="padding-top-one text-center bgimg">
      
            <PastTrips history={props.history}/>
        </div>
    );
};
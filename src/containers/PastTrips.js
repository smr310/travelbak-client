import React, { Component } from 'react';
import './PastTrips.css';

export default class PastTrips extends Component {
    renderList() {
        return this.props.trips.map((trip) => {
            <li key={trip.title}>{trip.title}</li>
        })
    }
    
    render() {
        return (
            <ul className="main-div">
                {this.renderList()}
            </ul>
        )
    }
}

export default function PastTrips() {
    return (
        <div className="main-div">
            <h3>Past Trips</h3>
            <div className="trip">TripA</div>
            <div className="trip">TripB</div>
            <div className="trip">TripC</div>
        </div>
    );
};
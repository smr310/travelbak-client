import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PastTrips.css';

class PastTrips extends Component {
    
    renderList() {
        return this.props.trips.map((trip) => {
            return (
            <li key={trip.title}>{trip.title}</li>
            )
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

function mapStateToProps(state) {
    console.log(state);
    return {
        trips: state.tripsReducer.trips,
        activeTrip: state.tripsReducer.activeTrip
        
    };
}

export default connect(mapStateToProps)(PastTrips)
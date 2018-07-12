import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PastTrips.css';

class PastTrips extends Component {
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

function mapStateToProps(state) {
    return {
        trips: state.trips
    };
}

export default connect(mapStateToProps)(PastTrips)
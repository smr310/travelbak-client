import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PastTrips.css';
import { fetchTrips, selectTrip, deleteTrip } from '../actions/tripActions';
import store from '../store'

import { API_BASE_URL } from '../config';

// import { bindActionCreators } from 'redux';

class PastTrips extends Component {
    

    componentDidMount() {
    
        this.props.dispatch(fetchTrips());

    }

  

    renderList() {
        return this.props.trips.map((trip) => {
            return (
            <li 
                key={trip._id}
                className="list-item-trip">
                <p
                    onClick={() => {
                        this.props.dispatch(selectTrip(trip))
                        this.props.history.push('/Trip')
                    }}>
                    {trip.title}</p>
                <button onClick={() => this.props.dispatch(deleteTrip(trip._id))}>DELETE</button>
            </li>            
            )
        })
    }
    
    render() {
        return (
            <div className="container">
                <h3>PastTrips Component</h3>
                <ul className="main-div">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
  

    return {
        trips: state.tripsReducer.trips,
    };
}

export default connect(mapStateToProps)(PastTrips)
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
                
                <span className="delete-button" onClick={() => this.props.dispatch(deleteTrip(trip._id))}>X</span>
                <div
                    className="trip-list-item-div"
                    onClick={() => {
                        this.props.dispatch(selectTrip(trip))
                        this.props.history.push('/Trip')
                    }}>
                    <p
                        className="trip-title">
                        {trip.title}</p>
                </div>
            </li>            
            )
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="my-trips-header-div">
                    <h3>My Trips</h3>
                </div>
                <button className="add-new-button" onClick={() => this.props.history.push('/AddTrip')}> + New Trip</button>
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
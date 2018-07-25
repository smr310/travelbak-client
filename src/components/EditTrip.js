import './EditTrip.css'

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editTrip } from '../actions/tripActions'

class EditTrip extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tripName: 'TEST TRIPNAME',
            location: 'TEST LOCATION'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // console.log('this is event.target.name:', event.target.name)

        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        
        let trip = {
            tripId: this.props.trip._id,
            tripName: this.state.tripName,
            location: this.state.location,
            startDate: "june",
            endDate: "july"
        }

        this.props.dispatch(editTrip(trip))
        this.props.history.push('/trip')
    }


    render() {
        return (
            <div>
                <form>
                    <fieldset>
                        <label htmlFor="inputTripName">Trip Name</label>
                        <input name="tripName" type="text" placeholder="" required value={this.state.tripName} onChange={this.handleChange} /><br />
                        <label htmlFor="inputLocation">Location(s)</label>
                        <input name="location" type="text" placeholder="" required value={this.state.location} onChange={this.handleChange} /><br />
                        <label htmlFor="inputDates">Dates: Calendar Dropdown</label><br />
                        <button
                            onClick={this.handleSubmit}
                            type="submit">Save</button>
                    </fieldset>
                </form>
            </div>
        )
    }

}

function mapStateToProps(state) {

    return {
        trip: state.activeTripReducer
    };
}

export default connect(mapStateToProps)(EditTrip)
import './EditTrip.css'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editTrip } from '../actions/tripActions'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

class EditTrip extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tripName: this.props.trip.title,
            location: this.props.trip.location,
            startDate: moment(this.props.trip.startDate),
            endDate: moment(this.props.trip.endDate)
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
        console.log('this is this.props', this.props)

        event.preventDefault();
        
        let trip = {
            tripId: this.props.trip._id,
            tripName: this.state.tripName,
            location: this.state.location,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }

        this.props.dispatch(editTrip(trip))
        this.props.history.push('/trip')
    }


    render() {
        return (
            <div className="main-div">
                <div className="add-trip-header">
                    <h3>Edit Trip</h3>
                </div>
                <form>
                    <fieldset className="add-trip-fieldset">
                        <label htmlFor="inputTripName">Trip Name</label>
                        <input name="tripName" type="text" placeholder="" required value={this.state.tripName} onChange={this.handleChange} /><br />
                        <label htmlFor="inputLocation">Location(s)</label>
                        <input name="location" type="text" placeholder="" required value={this.state.location} onChange={this.handleChange} /><br />
                        <label className="trip-date-input-label" htmlFor="inputDates">Dates</label><br />
                        <div className="start-date-div">
                            <DatePicker className="datepicker"
                                selected={this.state.startDate}
                                onChange={(event) => this.setState({
                                    startDate: event
                                })}
                            />
                        </div>
                        <div className="end-date-div">
                            <DatePicker className="datepicker"
                                selected={this.state.endDate}
                                onChange={(event) => this.setState({
                                    endDate: event
                                })}
                            />
                        </div>
                        <div className="trip-btn-container">
                            <button onClick={() => this.props.history.push('/dashboard')} className="add-new-button">&lt; Back</button>
                            <button className="add-new-button" onClick={this.handleSubmit} type="submit">Save Trip</button>
                        </div>
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
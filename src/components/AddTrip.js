import React from 'react';
import './AddTrip.css';
import { addTrip } from '../actions/tripActions';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { isMoment } from '../../node_modules/moment';
import moment from 'moment';


class AddTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tripName: '',
            location: '',
            startDate: moment(),
            endDate: moment()
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    

    handleChange(event) {
       
        const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;

            this.setState({
                [name]: value
            })
    }

    handleSubmit(event) {
        event.preventDefault();

        let trip = {
            tripName: this.state.tripName,
            location: this.state.location,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }

        this.props.dispatch(addTrip(trip))        
        this.props.history.push('/trip')
    }
    
    render() {
        return(
            <div className="main-div">
                <div className="add-trip-header">
                    <h3>Add Trip</h3>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset className="add-trip-fieldset">
                        <label htmlFor="inputTripName">Trip Name</label>
                        <input name="tripName" type="text" placeholder="" required value={this.state.tripName} onChange={this.handleChange} /><br />
                        <label htmlFor="inputLocation">Location(s)</label>
                        <input name="location" type="text" placeholder="" required value={this.state.location} onChange={this.handleChange}/><br />
                        <label htmlFor="inputDates"><span>Start Date</span><span className="end-date-label">End Date</span></label><br />
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
                            <button className="add-new-button" type="submit">Save Trip</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }

}

function mapStateToProps(state) {

    return {
        trips: state.tripsReducer.trips,
    };
}

export default connect(mapStateToProps)(AddTrip)


import React from 'react';
import './AddTrip.css';
import { addTrip } from '../actions/tripActions';
import { connect } from 'react-redux';


class AddTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tripName: '',
            location: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        console.log('this is event.target.name:', event.target.name)
        
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        let trip = {
            tripName: this.state.tripName,
            location: this.state.location,
            startDate: "june",
            endDate: "july"
        }

        this.props.dispatch(addTrip(trip))        
        this.props.history.push('/trip')
    }
    
    render() {
        return(
            <div className="main-div">
                <form>
                    <fieldset>
                        <label htmlFor="inputTripName">Trip Name</label>
                        <input name="tripName" type="text" placeholder="" required value={this.state.tripName} onChange={this.handleChange} /><br />
                        <label htmlFor="inputLocation">Location(s)</label>
                        <input name="location" type="text" placeholder="" required onChange={this.handleChange}/><br />
                        <label htmlFor="inputDates">Dates: Calendar Dropdown</label><br />
                        <button
                            onClick={this.handleSubmit}
                            type="submit">Save Trip</button>
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


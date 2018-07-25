import React from 'react';
import './Trip.css';
import JournalEntries from '../components/JournalEntries'
import { connect } from 'react-redux';


class Trip extends React.Component {
    


    clickEditHandler() {
        // console.log('inside clickEditHandler function')
        // console.log(this.props)
    
        this.props.history.push('/EditTrip')
    }
    
    render() {

        if (!this.props.trip) {
            return <div>No trip selected</div>
        }

        return(
           
            <div className="main-div">
                
                <h2>Selected trip: </h2>
                <div>Trip Name: {this.props.trip.title}</div>
                <div>Start Date: {this.props.trip.startDate}</div>
                <div>End Date: {this.props.trip.endDate}</div>
                <div>Location: {this.props.trip.location}</div>
                <button onClick={() => this.clickEditHandler()}>EDIT TRIP DETAILS</button>
                
                <h3>Journal Entries Below</h3>
               <button onClick={() => this.props.history.push('/AddJournalEntry')} className="new-entry-button">New Journal Entry</button>
                <div>
                    <JournalEntries history={this.props.history} selectedTrip = {this.props.trip} />
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {

    return {
        trip: state.activeTripReducer
    };
}

export default connect(mapStateToProps)(Trip)
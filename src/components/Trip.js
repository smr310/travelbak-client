import React from 'react';
import './Trip.css';
import JournalEntries from './JournalEntries'
import { connect } from 'react-redux';
import moment from 'moment'

class Trip extends React.Component {
    


    clickEditHandler() {
        this.props.history.push('/EditTrip')
    }
    
    render() {

        if (!this.props.trip) {
            return <div>No trip selected</div>
        }

        return(
           
            <div className="padding-top-one text-center bgimg">
                <div className="trip-details text-center trip-container margin-auto">
                    <button onClick={() => this.props.history.push('/dashboard')} className="add-new-button trip-detail-back-button">&lt; Back</button>
                    <div className="selected-trip trip-name margin-auto"><h3><span className="title-prevent-overlap">{this.props.trip.title}</span></h3></div>
                    <div className="selected-trip trip-location">{this.props.trip.location}</div>
                    <div className="selected-trip trip-date">{moment(this.props.trip.startDate).format('ll')} - {moment(this.props.trip.endDate).format('ll')}</div>
                    <button className="edit-trip-btn add-new-button" onClick={() => this.clickEditHandler()}>Edit Trip Details</button>
                    <h3 className="journal-entries-header">Journal Entries</h3>
                    <button onClick={() => this.props.history.push('/AddJournalEntry')} className="new-entry-button add-new-button">+ New Entry</button>
                    <JournalEntries history={this.props.history} selectedTrip={this.props.trip} />
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
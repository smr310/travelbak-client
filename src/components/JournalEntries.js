import React from 'react'
import './JournalEntries.css';
import { API_BASE_URL } from '../config';
import { connect } from 'react-redux'
import { journalEntrySelected, deleteJournalEntry } from '../actions/tripActions';
import moment from 'moment';

class JournalEntries extends React.Component {
    
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // console.log(this.props.selectedTrip._id)
        // console.log(this.props)
    }


    renderList() {
        // console.log('this is this.props.selectedTrip._id', this.props.selectedTrip._id)
        let journalEntries = this.props.selectedTrip.journalEntries;
        // let tripId = this.props.selectedTrip._id
        return journalEntries.map(journalEntry => {
            return (
                <li className="journal-list-item"
                    key= {journalEntry._id}
                    id= {journalEntry._id}>
                    <span className="delete-button" onClick={() => this.props.dispatch(deleteJournalEntry(journalEntry._id, this.props.selectedTrip))}>X</span>
                    <div
                        onClick={() => {
                            this.props.dispatch(journalEntrySelected(journalEntry))
                            this.props.history.push('/editJournalEntry');
                        }}>
                        <div className="entry-details-div">
                            <div className="entry-date-div">{moment(journalEntry.date).format('ll')}</div>
                            <span className="entry-title-span">{journalEntry.title}</span>
                        </div>  
                    </div>
                </li>
            )
        })

    }
    

    render() {
        return (
            <ul>{this.renderList()}</ul>
        )
    }
}

function mapStateToProps(state) {

    return {
        trips: state.tripsReducer.trips,
    };
}

export default connect(mapStateToProps)(JournalEntries)

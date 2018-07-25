import React from 'react';
import './AddJournalEntry.css';
import { connect } from 'react-redux'
import { editJournalEntry, selectTrip } from '../actions/tripActions'

class EditJournalEntry extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            content: '',
            date: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })

    }

    handleSubmit(event) {
        event.preventDefault();

        console.log('$$this.props: ', this.props)
        console.log('$$this.state: ', this.state)

        let journalEntryId = this.props.journalEntry._id;
        let tripId = this.props.trip._id
        let content = this.state.content
        let date = 'JANUARY 1'

        let journalEntry = {
            tripId,
            journalEntryId,
            content,
            date
        }

        this.props.dispatch(editJournalEntry(journalEntry));
        this.props.dispatch(selectTrip(this.props.trip));
        this.props.history.push('/trip')
    }

    

    render() {
        return (
            <div className="main-div">
                <form>
                    <fieldset>
                        <h4>Date</h4>
                        <input name="content" type="text" className="journal-entry-input" placeholder="" required value={this.state.content} onChange={this.handleChange} />
                        <br />
                        <button type="submit" className="create-account-btn" onClick={this.handleSubmit}>Save Journal Entry </button>
                    </fieldset>
                </form>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        trip: state.activeTripReducer,
        journalEntry: state.journalEntryReducer
    };
}

export default connect(mapStateToProps)(EditJournalEntry)
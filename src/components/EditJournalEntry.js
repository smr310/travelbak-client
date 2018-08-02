import React from 'react';
import './AddJournalEntry.css';
import { connect } from 'react-redux'
import { editJournalEntry, selectTrip } from '../actions/tripActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class EditJournalEntry extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: this.props.journalEntry.title,
            content: this.props.journalEntry.content,
            date: moment(this.props.journalEntry.date)
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
        let tripId = this.props.trip._id;
        let title = this.state.title;
        let content = this.state.content;
        let date = this.state.date;

        let journalEntry = {
            title,
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
                <div className="add-entry-header">
                    <h3>Journal Entry</h3>
                </div>
                <form>
                    <fieldset className="add-journal-entry-fieldset">
                        <label className="add-journal-label date-label" htmlFor="inputDate">Date</label>
                        <DatePicker
                            selected={this.state.date}
                            onChange={(event) => this.setState({
                                date: event
                            })}
                        />
                        <label className="add-journal-label" htmlFor="entryTitle">Title</label>
                        <input name="title" type="text" className="journal-entry-title-input" placeholder="" required value={this.state.title} onChange={this.handleChange} />
                        <label className="add-journal-label">Content</label>
                        <textarea name="content" type="text" className="journal-entry-input" placeholder="" required value={this.state.content} onChange={this.handleChange} />
                        <br />
                        <button onClick={()=> this.props.history.push('/trip')} className="add-new-button">&lt; BACK</button>
                        <button type="submit" className="add-new-button" onClick={this.handleSubmit}>SAVE</button>
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
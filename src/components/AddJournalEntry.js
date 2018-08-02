import React from 'react';
import './AddJournalEntry.css';
import { connect } from 'react-redux'
import { addJournalEntry } from '../actions/tripActions'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'


class AddJournalEntry extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: '',
            date: moment()
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
        // console.log('new journal entry submitted, this is the updated state: ', this.state)
        //console.log("this is this.state", this.state)

        let journalEntry = this.state;
        let tripId = this.props.trip._id

        this.props.dispatch(addJournalEntry(tripId, journalEntry));
        this.props.history.push('/trip')
    }



    render() {
        return(
            <div className="main-div">
                <div className="add-entry-header">
                    <h3>Add Journal Entry</h3>
                </div>
                <form className="add-entry-form">
                    <fieldset className="add-journal-entry-fieldset">
                        <label className="add-journal-label date-label" htmlFor="inputDate">Date</label>
                        <DatePicker className="datepicker"
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
                        <button onClick={() => this.props.history.push('/trip')} className="add-new-button">&lt; Back</button>
                        <button type="submit" className="add-new-button" onClick={this.handleSubmit}>Save</button>
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

export default connect(mapStateToProps)(AddJournalEntry)
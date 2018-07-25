import React from 'react';
import './AddJournalEntry.css';
import { connect } from 'react-redux'
import { addJournalEntry } from '../actions/tripActions'

class AddJournalEntry extends React.Component {

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
        trip: state.activeTripReducer
    };
}

export default connect(mapStateToProps)(AddJournalEntry)
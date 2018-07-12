import React from 'react';
import './JournalEntry.css';

export default function JournalEntry() {
    return (
        <div className="main-div">
            <form>
                <fieldset>
                    <h4>Date</h4>
                    <input type="text" className="journal-entry-input" placeholder="" required />
                    <br />
                    <button type="submit" className="create-account-btn">Save Journal Entry</button>
                </fieldset>
            </form>
        </div>
    );
};
import React from 'react';
import './Trip.css';
import JournalEntries from './JournalEntries'

export default function Trip() {
    return (
        <div className="main-div">
            <h2 className="trip-name">Trip Name</h2>
            <button className="new-entry-button">New Journal Entry</button>
            <h3>Location(s),</h3>
            <h4>Dates</h4>
            <div>
                <JournalEntries />
            </div>
        </div>
    );
};
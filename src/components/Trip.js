import React from 'react';
import './Trip.css';

export default function Trip() {
    return (
        <div className="main-div">
            <div className="main-div">
                <h2 className="trip-name">Trip Name</h2>
                <button className="new-entry-button">New Journal Entry</button>
                <h3>Location(s),</h3>
                <h4>Dates</h4>
                <div>
                    <div className="journal-entry">Journal Entry One, date, first line...(and Edit + Delete Buttons)</div>
                    <div className="journal-entry">Journal Entry Two, date, first line...(and Edit + Delete Buttons)</div>
                    <div className="journal-entry">Journal Entry Three, date, first line...(and Edit + Delete Buttons)</div>
                    <div className="journal-entry">Journal Entry Four, date, first line...(and Edit + Delete Buttons)</div>
                    <div className="journal-entry">Journal Entry Five, date, first line...(and Edit + Delete Buttons)</div>
                    <div className="journal-entry">Journal Entry Six, date, first line...(and Edit + Delete Buttons)</div>
                </div>
            </div>   
        </div>
    );
};
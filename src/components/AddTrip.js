import React from 'react';
import './AddTrip.css';

export default function Dashboard() {
    return (
        <div className="main-div">
            <form>
                <fieldset>
                    <label for="inputTripName">Trip Name</label>
                    <input type="text" placeholder="" required /><br />
                    <label for="inputLocation">Location(s)</label>
                    <input type="text" placeholder="" required /><br />
                    <label for="inputDates">Dates: Calendar Dropdown</label><br />
                    <button type="submit">Save Trip</button>
                </fieldset>
            </form>
        </div>
    );
};
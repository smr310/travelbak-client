import { API_BASE_URL } from '../config'

let userId = localStorage.getItem('userId');

export const addTrip = (trip) => dispatch => {

    console.log('inside--trip:', trip)


    fetch(`${API_BASE_URL}/trip/${userId}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "title": trip.tripName,
            "location": trip.location,
            "startDate": trip.startDate,
            "endDate": "july"
        })
    })
        .then(res => res.json())
        .then(trip => {
            dispatch(selectTrip(trip)) 
        })
        .catch(error => console.log(error))

}

export const addJournalEntry = (tripId, journalEntry) => dispatch => {
   
    fetch(`${API_BASE_URL}/journal/${userId}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "title": journalEntry.title,
            "content": journalEntry.content,
            "date": journalEntry.date,
            "tripId": tripId
        })
    })
        .then(res => res.json())
        .then(trip => {
            dispatch(selectTrip(trip)) 
        })
        .catch(error => console.log(error))
}

export const editTrip = (trip) => dispatch => {

    fetch(`${API_BASE_URL}/trip/${userId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "tripId": trip.tripId,
            "title": trip.tripName,
            "location": trip.location,
            "startDate": trip.startDate
        })
    })
        .then(res => res.json())
        .then(trip => {
            dispatch(selectTrip(trip))
        })
        .catch(error => console.log(error))
}

export const editJournalEntry = (journalEntry) => dispatch => {

    fetch(`${API_BASE_URL}/journal/${userId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({journalEntry})
    })
        .then(res => res.json())
        .then(trip => {
            dispatch(selectTrip(trip))
        })
        .catch(error => console.log(error))
}



export const fetchTrips = () => dispatch => {
    fetch(`${API_BASE_URL}/trip/${userId}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        //console.log(res)
        return res.json()
    })
    .then(trips => {
        // console.log(trips)
        dispatch(fetchTripsSuccess(trips))
    })
    .catch(error => console.log(error))
}


export const deleteTrip = (tripId) => dispatch => {

    fetch(`${API_BASE_URL}/trip/${userId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "tripId": tripId
        })
    })
        .then(res => res.json())
        .then(trips => {
            dispatch(fetchTripsSuccess(trips))
        })
        .catch(error => console.log(error))
}


export const deleteJournalEntry = (journalEntryId, selectedTrip) => dispatch => {

    fetch(`${API_BASE_URL}/journal/${userId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "journalEntryId": journalEntryId,
            "tripId": selectedTrip._id
        })
    })
    .then(res => res.json())
    .then(trip => {
        dispatch(selectTrip(trip)) 
    })
    .catch(error => console.log(error))
}







const FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS'
export const fetchTripsSuccess = trips => ({
    type: FETCH_TRIPS_SUCCESS,
    trips
})


const TRIP_SELECTED = 'TRIP_SELECTED'
export const selectTrip = (trip) => ({
    type: TRIP_SELECTED,
    payload: trip
})

const JOURNAL_ENTRY_SELECTED = 'JOURNAL_ENTRY_SELECTED'
export const journalEntrySelected = (journalEntry) => ({
    type: JOURNAL_ENTRY_SELECTED,
    payload: journalEntry
})




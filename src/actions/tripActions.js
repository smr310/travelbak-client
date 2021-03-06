import { API_BASE_URL } from '../config'

let userId;

export const addTrip = (trip) => dispatch => {

    userId = localStorage.getItem('userId')

    fetch(`${API_BASE_URL}/trip/${userId}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({
            "title": trip.tripName,
            "location": trip.location,
            "startDate": trip.startDate,
            "endDate": trip.endDate
        })
    })
        .then(res => res.json())
        .then(trip => {
            dispatch(selectTrip(trip)) 
        })
        .catch(error => console.log(error))

}

export const addJournalEntry = (tripId, journalEntry) => dispatch => {
    userId = localStorage.getItem('userId')

    fetch(`${API_BASE_URL}/journal/${userId}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
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
    userId = localStorage.getItem('userId')
    fetch(`${API_BASE_URL}/trip/${userId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({
            "tripId": trip.tripId,
            "title": trip.tripName,
            "location": trip.location,
            "startDate": trip.startDate,
            "endDate": trip.endDate
        })
    })
        .then(res => res.json())
        .then(trip => {
            dispatch(selectTrip(trip))
        })
        .catch(error => console.log(error))
}

export const editJournalEntry = (journalEntry) => dispatch => {
    userId = localStorage.getItem('userId')
    fetch(`${API_BASE_URL}/journal/${userId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
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
    userId = localStorage.getItem('userId')
    fetch(`${API_BASE_URL}/trip/${userId}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
    })
    .then(res => {
        console.log('res.status', res.status)
        return res.json()
    })
    .then(trips => {
        // console.log(trips)
        dispatch(fetchTripsSuccess(trips))
    })
    .catch(error => {
        console.log(error);
    })
}


export const deleteTrip = (tripId) => dispatch => {
    userId = localStorage.getItem('userId')
    fetch(`${API_BASE_URL}/trip/${userId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
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
    userId = localStorage.getItem('userId')
    fetch(`${API_BASE_URL}/journal/${userId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
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




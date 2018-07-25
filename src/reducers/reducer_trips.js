
const initialState = {
    trips: [
        // { title: 'China 2016', dates: 'somedate', journalEntries: [{ title: 'sometitle', entry: 'sometext' }] },
        // { title: 'Austin 2017', dates: 'somedate', journalEntries: [{ title: 'sometitle', entry: 'sometext' }] },
        // { title: 'Peru 2018', dates: 'somedate', journalEntries: [{ title: 'sometitle', entry: 'sometext' }] }
    ]
}

const tripsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TRIPS_SUCCESS':
            return {
                ...state,
                trips: action.trips
            }
        default:
            return state
    }
       
}

export default tripsReducer;

const initialState = {
    trips: [
        { title: 'China 2016', dates: 'somedate', journalEntries: [{ title: 'sometitle', entry: 'sometext' }] },
        { title: 'Austin 2017', dates: 'somedate', journalEntries: [{ title: 'sometitle', entry: 'sometext' }] },
        { title: 'Peru 2018', dates: 'somedate', journalEntries: [{ title: 'sometitle', entry: 'sometext' }] }
    ],
    activeTrip: {}

}

const tripsReducer = (state = initialState, action) => {
    if (action.type === '') {
        return {}
    } else {
        return state;
    }
}

export default tripsReducer;
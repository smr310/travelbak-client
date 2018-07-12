const initialState = {
    journalEntries: [],
    activeJournalEntry: { title: 'Austin 2017', dates: 'somedate', journalEntries: [{ title: 'sometitle', entry: 'sometext' }] }
}

const journalEntryReducer = (state = initialState, action) => {
    if(action.type === '') {
        return {};
    } else {
        return state;
    }
}

export default journalEntryReducer;    
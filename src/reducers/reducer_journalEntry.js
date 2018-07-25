
const journalEntryReducer = (state = null, action) => {
    switch(action.type) {
    case 'JOURNAL_ENTRY_SELECTED':
        return action.payload
    }
    return state
}

export default journalEntryReducer;    
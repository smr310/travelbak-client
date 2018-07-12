import { combineReducers } from 'redux';
import tripsReducer from './reducer_trips';
import journalEntryReducer from './reducer_journalEntry';


const rootReducer = combineReducers({
    tripsReducer,
    journalEntryReducer
});

export default rootReducer;
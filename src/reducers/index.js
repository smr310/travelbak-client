import { combineReducers } from 'redux';
import TripsReducer from './reducer_trips';


const rootReducer = combineReducers({
    trips: TripsReducer
});

export default rootReducer;
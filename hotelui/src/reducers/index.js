import { combineReducers } from 'redux';
import hotelListState from './HotelList_reducer';
import reservationData from './Reservation_reducer'

const rootReducer = combineReducers({
    hotelListState,
    reservationData
})

export default rootReducer;
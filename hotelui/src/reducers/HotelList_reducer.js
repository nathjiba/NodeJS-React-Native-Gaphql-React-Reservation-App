export default function(state={}, action){
    switch(action.type){
        case 'GET_HOTELLIST':
            return{...state, list:action.payload.data.getAllHotels.result}
        case 'GET_HOTELDETAILS':
            return{...state, details:action.payload.data.getHotelDetails.result}
        default:
            return state
    }
}


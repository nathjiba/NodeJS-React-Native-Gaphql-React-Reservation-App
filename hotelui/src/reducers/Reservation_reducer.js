export default function(state={}, action){
    switch(action.type){
        case 'GET_RESERVATION':
            return{...state, reservation:action.payload.data.getAllBookHotels.result}
        default:
            return state
    }
}

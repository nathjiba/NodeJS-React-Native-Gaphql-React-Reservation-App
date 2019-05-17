import { StackNavigator } from 'react-navigation';


import  HotelListContainer from '../container/HotelListContainer'
import  HotelDetailContainer from '../container/HotelDetailContainer'
import  HotelBookingContainer from '../container/HotelBookingContainer'
import  BookingHistoryContainer from '../container/BookingHistoryContainer'



const MainNavigator = StackNavigator(
    {
        HotelList: { screen: HotelListContainer },
        HotelDetail: { screen: HotelDetailContainer },
        HotelBooking: { screen: HotelBookingContainer },
        BookingHistory : {screen: BookingHistoryContainer}
    }
);

const preGetStateForAction = MainNavigator.router.getStateForAction;
MainNavigator.router.getStateForAction = (action, state) => {
    if (state && action.type === 'ReplaceCurrentScreen') {
        const routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action);
        return {
            ...state,
            routes,
            index: routes.length - 1,
        };
    }
    return preGetStateForAction(action, state);
};



export default MainNavigator;
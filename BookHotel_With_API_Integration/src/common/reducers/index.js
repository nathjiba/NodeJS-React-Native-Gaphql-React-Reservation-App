
import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import hotel from './hotels'
import AppNavigator from '../../rootnavigator';
const INITIAL_STATE = AppNavigator.router.getStateForAction(NavigationActions.init());
const navigation = (state = INITIAL_STATE, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};


export default combineReducers({
    nav: navigation,
    hotel
});

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ApplicationContainer from '../ApplicationContainer';
import configureStore from '../../common/store/configureStore';

const store = configureStore();


class BookHotelContainer extends Component {
    static navigationOptions =  {
        header: null,
    }

    render() {
        return (
            <Provider store={store}>
                <ApplicationContainer />
            </Provider>
        );
    }
}

export default BookHotelContainer;
import networks from '../common'
import { NavigationActions } from 'react-navigation';
import Constants from '../constants'
import gql from 'graphql-tag';
import {Alert} from 'react-native';

const GET_HOTELS = gql`
query{
  getAllHotels{
    result{
    _id
      name
      available
      charge
      rating
      city
      details
      cover
    }
  }
}
`;

const GET_BOOKED_HISTORY = gql`
query{
  getAllBookHotels {
    result {
      _id
      bookId
      name
      available
      charge
      rating
      city
      cover
      checkInAt
      checkOutAt
    }
  }
}
`;

const BOOK_HOTEL = gql`
  mutation bookHotel($fkHotelId: String!,$checkInAt:String!,$checkOutAt:String!) {
    bookHotel(input: {fkHotelId: $fkHotelId, checkInAt:$checkInAt, checkOutAt:$checkOutAt}) {
     errors {
      key
      value
    }
    result {
      _id
      name
      available
      city
      cover
    }
    } 
  }
`;


export const getHotelsList = () => (dispatch, getState) => {
    dispatch(requestStarted())
    networks
        .query({
            query: GET_HOTELS
        })
        .then(result => {
            dispatch(requestCompleted())
            dispatch({
                type: Constants.HOTEL_LIST,
                payload: result,
            });

        }).catch((error) => {
        console.log('\nerror: \n', error)
        dispatch(requestCompleted())
    });
};

export const getReservations = () => (dispatch, getState) => {
    dispatch(requestStarted())
    networks
        .query({
            query: GET_BOOKED_HISTORY
        })
        .then(result => {
            dispatch(requestCompleted())
            dispatch({
                type: Constants.RESERVATION_LIST,
                payload: result,
            });

        }).catch((error) => {
        console.log('\nerror: \n', error)
        dispatch(requestCompleted())
    });
};

export const createReservation = (fkHotelId, checkInAt, checkOutAt) => (dispatch, getState) => {
    dispatch(requestStarted())
    networks.mutate({
        variables: {fkHotelId, checkInAt, checkOutAt},
        mutation: BOOK_HOTEL,
    })
        .then(result => {
            dispatch(requestCompleted())
            console.log("Book Hotels ", result)
            Alert.alert("Success", "Congratulations! Your hotel booked successfully")
            navigateToReservationList(dispatch)
        })
        .catch(error => {
            dispatch(requestCompleted())
            console.log(error)
        });
};

const requestCompleted = () => (dispatch) => {
    dispatch({
        type: Constants.REQUEST_COMPLETED,
    });
};

const requestStarted = () => (dispatch) => {
    dispatch({
        type: Constants.REQUEST_STARTED,
        payload: '',
    });
};

export const navigateToReservationList = (dispatch) => {
    dispatch(NavigationActions.back());
};
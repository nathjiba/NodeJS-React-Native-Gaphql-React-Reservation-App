import client from '../network';
import gql from 'graphql-tag';

const GET_HOTELS = gql`
query{
        getAllHotels {
          result {
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
    }`;

const GET_HOTELS_DETAIL = gql`
    query getHotelDetails($id: String!) {
        getHotelDetails(input: {id: $id}) {
          result {
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
      }`
const GET_ALL_BOOKING = gql`
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
        details
        cover
        checkInAt
        checkOutAt
      }
    }
  }`

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
export const HotelDataAction = () => (dispatch, getState) => {
    dispatch(requestStarted())
    client
        .query({
            query: GET_HOTELS
        })
        .then(result => {
            dispatch(requestCompleted())
            dispatch({
                type: 'GET_HOTELLIST',
                payload: result,
            });
        }).catch((error) => {
        console.log('\nerror: \n', error)
        dispatch(requestCompleted())
    });
};

export const HotelDetailAction = (id) => (dispatch, getState) => {
    dispatch(requestStarted())
    client
        .query({
            variables: {id},
            query: GET_HOTELS_DETAIL
        })
        .then(result => {
            dispatch(requestCompleted())
            dispatch({
                type: 'GET_HOTELDETAILS',
                payload: result,
            });
        }).catch((error) => {
        console.log('\nerror: \n', error)
        dispatch(requestCompleted())
    });
};


export const ReservationAction = () => (dispatch, getState) => {
    dispatch(requestStarted())
    client
        .query({
            query: GET_ALL_BOOKING
        })
        .then(result => {
            dispatch(requestCompleted())
            dispatch({
                type: 'GET_RESERVATION',
                payload: result,
            });
        }).catch((error) => {
        console.log('\nerror: \n', error)
        dispatch(requestCompleted())
    });
};

export const CreateReservation = (fkHotelId, checkInAt, checkOutAt) => (dispatch, getState) => {
    dispatch(requestStarted())
    client.mutate({
        variables: {fkHotelId, checkInAt, checkOutAt},
        mutation: BOOK_HOTEL,
    })
        .then(result => {
            dispatch(requestCompleted())
            console.log("Book Hotels ", result)
        })
        .catch(error => {
            dispatch(requestCompleted())
            console.log(error)
        });
};

const requestCompleted = () => (dispatch) => {
    dispatch({
        type: 'REQUEST_COMPLETED',
    });
};

const requestStarted = () => (dispatch) => {
    dispatch({
        type: 'REQUEST_STARTED',
        payload: '',
    });
};

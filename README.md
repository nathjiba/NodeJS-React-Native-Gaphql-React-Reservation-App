Hotel Booking App

#Technologies
React
React Native
Graphlql
Apollo Server
Apollo Client

## Graphql Apollo API is in hotel-api-gql folder.
#Backend
Api Cretaed with graphQl Hosted on Herkou Server
Base Url: https://hotel-management-api-gql.herokuapp.com/graphql

Query:{
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
    }


## REACT NATIVE App - Book Hotel with API Integration

Application is related to Hotel Bookings, It contains four screen, 

Hotel List - It will display all available hotels
Hotel Details - Gives all details of specific hotel
Booking Screen - We can book hotel with checkin and checkout date
History Screen- it will display simple booking history


How to run application?

Step 1. Install react native and required tools. Refer below link for more details
     https://facebook.github.io/react-native/docs/getting-started

Step 2. open terminal and go to project folder 

Step 3. Run Following commands
    
 npm install
 react-native run-ios


#React Web App
npm install
npm start


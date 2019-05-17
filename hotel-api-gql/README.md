API for Hotel Reservations
==========================

## Introduction
This is a backend application developed using nodejs and graphql.

## Dependencies
  - Nodejs >=8.x.x
  - Mongodb >=4.x.x
  
### How it works
In application root path run following commands
```bash
npm install
npm start
```

### API Request

1. **Create Hotel with valid input.**
```
mutation {
  createHotel(input: {
    name: "The Roosevelt Hotel",
    available: 10,
    charge:5000,
    rating:4,
    city: "Midtown East",
    details:"Known as the Grand Dame of Madison Avenue, The Roosevelt Hotel opened during the Jazz.",
    cover: "https://t-ec.bstatic.com/images/hotel/max1024x768/151/151426512.jpg"
  }) {
    errors {
      key
      value
    }
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

```
**Output for the above request**
```
{
  "data": {
    "createHotel": {
      "errors": [],
      "result": {
        "_id": "5c44adb8b396d21227ba98a8",
        "name": "The Roosevelt Hotel",
        "available": 10,
        "charge": 5000,
        "rating": 4,
        "city": "Midtown East",
        "details": "Known as the Grand Dame of Madison Avenue, The Roosevelt Hotel opened during the Jazz.",
        "cover": "https://t-ec.bstatic.com/images/hotel/max1024x768/151/151426512.jpg"
      }
    }
  }
}
```
2. **Book Hotel with valid input.**
```
mutation {
  bookHotel(input: {fkHotelId: "5c44adb8b396d21227ba98a8", checkInAt: "2019-02-10", checkOutAt: "2019-02-12"}) {
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

```
**Output for the above request**
```
{
  "data": {
    "bookHotel": {
      "errors": [],
      "result": {
        "_id": "5c43f57c682ccd1891546dd8",
        "name": "INNSIDE by Melià New York Nomad Opens in new window",
        "available": 5,
        "city": "Chelsea",
        "cover": "https://s-ec.bstatic.com/images/hotel/max1024x768/670/67055636.jpg"
      }
    }
  }
}
```
3. **Get All Hotel with no input.**
```
{
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

```
**Output for the above request**
```
{
  "data": {
    "getAllHotels": {
      "result": [
        {
          "_id": "5c43f57c682ccd1891546dd8",
          "name": "INNSIDE by Melià New York Nomad Opens in new window",
          "available": 5,
          "city": "Chelsea",
          "cover": "https://s-ec.bstatic.com/images/hotel/max1024x768/670/67055636.jpg"
        }
      ]
    }
  }
}
```
4. **Get All Book Hotel with no input.**
```
{
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
}

```
**Output for the above request**
```
{
  "data": {
    "getAllBookHotels": {
      "result": [
        {
          "_id": "5c43f57c682ccd1891546dd8",
          "bookId": "5c43f591682ccd1891546dd9",
          "name": "INNSIDE by Melià New York Nomad Opens in new window",
          "available": 5,
          "city": "Chelsea",
          "cover": "https://s-ec.bstatic.com/images/hotel/max1024x768/670/67055636.jpg",
          "checkInAt": "2019-02-10",
          "checkOutAt": "2019-02-12"
        }
      ]
    }
  }
}
```
5. **Get Hotel Deteils with ID.**
```
{
  getHotelDetails(input: {id: "5c44adb8b396d21227ba98a8"}) {
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

```
**Output for the above request**
```
{
  "data": {
    "getHotelDetails": {
      "result": {
        "_id": "5c44adb8b396d21227ba98a8",
        "name": "The Roosevelt Hotel",
        "available": 10,
        "charge": 5000,
        "rating": 4,
        "city": "Midtown East",
        "details": "Known as the Grand Dame of Madison Avenue, The Roosevelt Hotel opened during the Jazz.",
        "cover": "https://t-ec.bstatic.com/images/hotel/max1024x768/151/151426512.jpg"
      }
    }
  }
}
```

## Environment variables
Environment variables is the main mechanism of manipulating application settings. Currently application recognizes
following environment variables:

| Variable                       | Default value | Description             |
| ------------------------------ | ------------- | ----------------------- |
| ENV                            | development   | Sets current environment. Allows application to manipulate some settings automatically |
| HOST                           | localhost      | Address to listen on   |
| PORT                           | 3500           | Port to listen on                     |
| End Point                      | http://localhost:3500/graphiql          |              |

## API Documentation
You can get API docs using /graphiql path

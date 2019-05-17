const { hotel } = require('../../lib')

module.exports = {
  Mutation: {
    createHotel: async (obj, args, context, info) => {
      return new Promise(async (resolve) => {
        let response = await hotel.createHotel(args.input)
        return resolve(response)
      });
    },
    bookHotel: async (obj, args, context, info) => {
      return new Promise(async (resolve) => {
        let response = await hotel.bookHotel(args.input)
        return resolve(response)
      });
    }
  },
  Query: {
    getHotelDetails: async (obj, args, context, info) => {
      return new Promise(async (resolve) => {
        let response = await hotel.getHotelDetails(args.input)
        return resolve(response)
      });
    },
    getAllBookHotels: async (obj, args, context, info) => {
      return new Promise(async (resolve) => {
        let response = await hotel.getAllBookHotels()
        return resolve(response)
      });
    },
    getAllHotels: async (obj, args, context, info) => {
      return new Promise(async (resolve) => {
        let response = await hotel.getAllHotels()
        return resolve(response)
      });
    }
  }
}

const asyncLoop = require('node-async-loop');
const Hotel = require('../models/Hotel');
const BookHotel = require('../models/BookHotel');
const joiValidation = require('../validation/hotel');

module.exports = {
    createHotel(input) {
        return new Promise(async (resolve) => {
            let validation = await joiValidation.validateCreateHotelInput(input);
            if (validation.error) return resolve({ errors: validation.error, result: {} });
            new Hotel(validation.value).save((error, data) => {
                if (error) return resolve({ errors: [{ key: 'custom', value: 'Internal server error' }], result: {} });
                return resolve({
                    errors: [],
                    result: data
                });
            });
        });
    },
    bookHotel(input) {
        return new Promise(async (resolve) => {
            let validation = await joiValidation.validateHotelBookInput(input);
            if (validation.error) return resolve({ errors: validation.error, result: {} });
            new BookHotel(validation.value).save((error, data) => {
                if (error) return resolve({ errors: [{ key: 'custom', value: 'Internal server error' }], result: {} });
                Hotel.findOne({ _id: data.fkHotelId }, (err, res) => {
                    if (err) return resolve({ errors: [{ key: 'custom', value: 'Internal server error' }], result: {} });
                    return resolve({
                        errors: [],
                        result: res
                    });
                });
            });
        });
    },
    getHotelDetails(reqData) {
        return new Promise(resolve => {
            Hotel.findOne({ _id: reqData.id }, (error, data) => {
                if (error) return resolve({ result: {} });
                return resolve({ result: data });
            })
        })
    },
    getAllBookHotels() {
        return new Promise(resolve => {
            BookHotel.find({}, (error, data) => {
                if (error) return resolve({ result: [] });
                if (data.length > 0) {
                    const arrData = [];
                    return asyncLoop(data, (items, next) => {
                        Hotel.findOne({ _id: items.fkHotelId }, (err, item) => {
                            if (err) return resolve({ result: [] });
                            if (item) {
                                arrData.push({
                                    _id: item._id,
                                    bookId: items._id,
                                    name: item.name,
                                    available: item.available,
                                    charge: item.charge,
                                    rating: item.rating,
                                    city: item.city,
                                    details: item.details,
                                    cover: item.cover,
                                    checkInAt: items.checkInAt,
                                    checkOutAt: items.checkOutAt
                                });
                            }
                            next();
                        })
                    }, () => resolve({ result: arrData }))
                }
                return resolve({ result: [] });
            });
        });
    },
    getAllHotels() {
        return new Promise(resolve => {
            Hotel.find({}, (error, data) => {
                if (error) return resolve({ result: [] });
                return resolve({ result: data });
            })
        })
    },
}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HotelSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 100,
    },
    available: {
        type: Number,
        default: 0
    },
    charge: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    city: {
        type: String,
        required: true,
        min: 3,
        max: 100,
    },
    details: {
        type: String
    },
    cover: {
        type: String
    }
});

module.exports = mongoose.model('Hotel', HotelSchema);
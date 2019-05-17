const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

/**
 * Starts: Validation schema
 */

// Define schema for create a user.
let createHotelSchema = Joi.object().keys({
    name: Joi.string().min(3).max(100).required().trim().label('Name'),
    available: Joi.number().integer().required().label('Available'),
    charge: Joi.number().integer().required().label('Charge'),
    rating: Joi.number().integer().required().label('Rating'),
    city: Joi.string().min(3).max(100).required().trim().label('City'),
    details: Joi.string().allow('').optional().trim().label('Details'),
    cover: Joi.string().allow('').optional().trim().label('Image')
});

let createHotelBookSchema = Joi.object().keys({
    fkHotelId: Joi.string().required().trim().label('Hotel ID'),
    checkInAt: Joi.string().required().trim().label('Checkin Date'),
    checkOutAt: Joi.string().required().trim().label('Checkout Date')
});

/**
 * Call funcations.
 */
const validateCreateHotelInput = async (input) => await validateInput(input, createHotelSchema);
const validateHotelBookInput = async (input) => await validateInput(input, createHotelBookSchema);

// A function which is used for process all request.
const validateInput = (input, schema) => {
    return new Promise(resolve => {
        Joi.validate(input, schema, {
            abortEarly: false,
            language: {},
            escapeHtml: true,
            noDefaults: true
        }, (error, value) => {
            if (error) return resolve({
                error: error.details.map(item =>
                    ({ key: item.path[0], value: item.message.replace(new RegExp('"', 'g'), '') })
                )
            });
            return resolve({ error: null, value });
        });
    });
}

// Access methods out side used.
module.exports = {
    validateCreateHotelInput,
    validateHotelBookInput
}
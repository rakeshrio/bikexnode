const mongoose = require('mongoose');
const Joi = require('joi');

const customerSchema = new mongoose.Schema({
    name:String,
    email: String,
    phone: Number,
    address: String,
    pin: Number,
    landmark:{ type:String, default:'No landmark provided!'},
    phone_verified: Boolean,
    email_verified:Boolean,
    date: { type:Date, default:Date.now},
});
const Customer = mongoose.model('customers', customerSchema)

function validateCustomer(customer) {
    const schema = {
      name: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(50).required(),
      phone: Joi.number().min(10).required(),
      address: Joi.string().min(5).max(100).required(),
      landmark: Joi.string().min(5).max(100),
      pin: Joi.number().integer().required(),
      phone_verified: Joi.required(),
      email_verified:  Joi.required()
    };
  
    return Joi.validate(customer, schema);
  }
module.exports.Customer = Customer;
module.exports.validate = validateCustomer;
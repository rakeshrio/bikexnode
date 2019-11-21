
const express = require('express');
const {Customer, validate} = require('../models/customers')
const router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'attach/' })
 

router.post('/', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send({"err": 1 , "msg" : error.details[0].message});
  
    let customer = new Customer({ 
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      pin: req.body.pin,
      landmark: req.body.landmark,
      phone_verified: req.body.phone_verified,
      email_verified: req.body.email_verified,
    });
    customer = await customer.save();
    
    res.send({"err": 0, "customer": customer});
  });
  router.get('/', async (req, res) => {
    const customers = await Customer.find();
    res.send(customers);
  });
module.exports = router;

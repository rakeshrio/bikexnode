const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const customers = require('./routes/customer');
const vehicles = require('./routes/vehicle');
const procurements = require('./routes/procurement');
const modals = require('./routes/modal')
const refurbishment = require('./routes/refurbish');
const agents = require('./routes/agent');
const bikeuploads = require('./routes/bikeuploads');
const bikedisplayuploads = require('./routes/displayuploads');
const standard = require('./routes/standardroutes');
const premium = require('./routes/premiumroutes');
const faq = require('./routes/faq');
const procurestatus = require('./routes/status');
const centres = require('./routes/centre')
const uploadStatus = require('./routes/uploadstatus')
const fetchVehicle = require('./routes/fetchdata')
const megaFile = require('./routes/megaJson')

const app = express();
app.use(express.json());
app.use(cors())
app.use('/myImages',express.static('attach'));


mongoose.connect('mongodb://localhost/bikex')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

  app.use('/api/customers', customers);
  // app.use('/api/vehicles', vehicles);
  app.use('/api/procurements', procurements);
  app.use('/api/models', modals);
  app.use('/api/refurbished', refurbishment);
  app.use('/api/agents', agents);
  app.use('/api/uploads', bikeuploads);
  app.use('/api/upload-display', bikedisplayuploads);
  app.use('/api/uploadstatus', uploadStatus);
  app.use('/api/standard', standard);
  app.use('/api/fetch/', fetchVehicle);
  app.use('/api/premium', premium);
  app.use('/api/faq', faq);
  app.use('/api/centres', centres);
  app.use('/api/procurestatus', procurestatus);
  app.use('/api/vehicle', megaFile);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
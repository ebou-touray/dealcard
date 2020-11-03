const express = require('express');

//import env file
require('dotenv').config();

//init app
const app = express();

//import mongodb from db folder
require('./db/initMongoose');

//middleware, body
app.use(express.json());

//import routes
app.use('/', require('./routes/dealRoute'));

const PORT = process.env.PORT || 5000;

//start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

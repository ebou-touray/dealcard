const mongoose = require('mongoose');

//connect mongodb
module.exports = mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create connection
const db = mongoose.connection;
db.on('connected', () => console.log('Successfully connected to DB'));
db.on('error', (err) => console.log(`Error connecting to DB: ${err}`));
db.on('disconnected', () => console.log('DB disconnected'));

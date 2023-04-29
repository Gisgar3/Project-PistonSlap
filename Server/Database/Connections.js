const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@127.0.0.1:27017/${process.env.DB}?retryWrites=true&w=majority`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(connectionString, options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

module.exports = mongoose.connection;

const mongoose = require('mongoose');
const { connectionUrl } = require('../config/keys');

const connectMongodb = async () => {
  try {
    await mongoose.connect(connectionUrl);
    console.log('MongoDB connected successfully');
  } catch(error) {
    console.log(error);
  }
}

module.exports = connectMongodb;
const mongoose = require('mongoose');

module.exports = () => {
  const connect = () => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
      if (err) {
        console.log('mongodb connection error', err);
      } else {
        console.log('mongodb connection success');
      }
    });
  };

  connect();
  mongoose.connection.on('error', (err) => {
    console.log('mongodb connection error', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('mongodb connection is lost, trying to re-connect to mongodb.');
    connect();
  });

  require('./models/user');
};

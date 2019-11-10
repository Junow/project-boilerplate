
import * as mongoose from 'mongoose';
// const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: String, reuqired: true },
  pwd: { type: String, required: true },
});

userSchema.statics.findAll = function () {
  return this.find({});
};

module.exports = mongoose.model('User', userSchema);

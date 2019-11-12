const path = require('path');
const fs = require('fs');
const util = require('util');
require('dotenv').config();
const connect = require('../config/mongo');

connect();

const models = fs.readdirSync(path.join(__dirname, '../models'));

function deleteMany(file) {
  const schema = require(path.join(__dirname, '../models', file)).default;
  schema.deleteMany({}, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(0);
    }
    console.log(schema, 'end');
  });
}

const deleteManyP = util.promisify(deleteMany);
const arr = models.map(deleteManyP);
const result = Promise.all(arr);

result.then(() => {
  process.exit(0);
});

// models.forEach((file, idx) => {
//   const schema = require(path.join(__dirname, '../models', file)).default;
//   schema.deleteMany({}, (err) => {
//     if (err) {
//       console.error(err);
//       process.exit(0);
//     }
//   });
// });

const mongoose = require('mongoose');

const images = [
  {
    owner: mongoose.Types.ObjectId(),
    creator: mongoose.Types.ObjectId(),
    public: true,
    url: '1234',
    downloads: 1234,
  },
  {
    owner: mongoose.Types.ObjectId(),
    creator: mongoose.Types.ObjectId(),
    public: true,
    url: '2345',
    downloads: 2345,
  },
];

export default images;

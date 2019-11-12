const mongoose = require('mongoose');

const musics = [
  {
    owner: mongoose.Types.ObjectId(),
    creator: mongoose.Types.ObjectId(),
    cover_img_url: 'cover_img_url',
    sound_url: 'sound_url',
    public: true,
    genre: ['1', '2'],
    mood: ['3', '4'],
    ref: [mongoose.Types.ObjectId(), mongoose.Types.ObjectId()],
  },
];

export default musics;

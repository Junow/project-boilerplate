const mongoose = require('mongoose');

const profiles = [{
  owner: mongoose.Types.ObjectId(),
  follower: [mongoose.Types.ObjectId(), mongoose.Types.ObjectId()],
  following: [mongoose.Types.ObjectId(), mongoose.Types.ObjectId()],
  inst_simple: 'simple',
  inst_detail: 'detail',
  active_fields: ['active', 'fields'],
  website_url: 'http://naver.com',
},
];

export default profiles;

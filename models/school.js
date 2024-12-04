const mongoose = require('mongoose');

const School = mongoose.Schema({
  name: { type: String, required: true },
  location: {
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      zipcode: { type: String, required: true },
    },
    geo: {
      type: { type: String, required: true, default: 'Point' },
      coordinates: { type: [Number], required: true, index: '2dsphere' },
    },
  },

});

module.exports = mongoose.model('School', School);
// export default School;

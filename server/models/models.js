const mongoose = require('mongoose');
const { connection } = require('../../config');

mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => console.log('connected'))
  .catch(err => console.log(err));

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  notes: [{
    type: String,
    default: []
  }],
  confident: {
    type: Boolean,
    default: false
  }
});

module.exports = {
  Topic: mongoose.model('Topic', topicSchema)
};
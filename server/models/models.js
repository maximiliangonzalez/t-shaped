const mongoose = require('mongoose');
const { connection } = require('../../config');

mongoose.connect(connection)
  .catch(err => console.log(err));

const topicSchema = new mongoose.Schema({
  name: String,
  notes: [{
    type: String,
    default: []
  }],
  confidence: {
    type: Boolean,
    default: false
  }
});

module.exports = {
  Topic: topicSchema
};
const { Topic } = require('../models/models');
const mongoose = require('mongoose');

const getAllTopics = (req, res, next) => {
  console.log(Topic);
  Topic.find({}, (err, data) => {
    if (err) {
      console.log('data', data)
      return next(err);
    }
    res.locals.data = data;
    return next();
  });
}

module.exports = {
  getAllTopics
}
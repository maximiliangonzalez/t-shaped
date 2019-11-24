const { Topic } = require('../models/models');

const getAllTopics = (req, res, next) => {
  Topic.find({}, (err, data) => {
    if (err) {
      return next(err);
    }
    res.locals.data = data;
    return next();
  });
}

module.exports = {
  getAllTopics
}
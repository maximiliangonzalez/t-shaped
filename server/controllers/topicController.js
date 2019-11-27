const { Topic } = require('../models/models');

const getAllTopics = (req, res, next) => {
  Topic.find({}, (err, data) => {
    if (err) {
      return next(err);
    }
    res.locals.data = data;
    return next();
  });
};

const addTopic = (req, res, next) => {
  Topic.create({name: req.body.name}, (err, data) => {
    if (err) {
      return next(err);
    }
    return next();
  })
};

module.exports = {
  getAllTopics,
  addTopic
}
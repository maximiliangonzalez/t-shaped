const { Topic } = require('../models/models');

const getAllTopics = (req, res, next) => {
  Topic.find({}, 'name confidence', (err, data) => {
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
    res.locals.data = data;
    return next();
  })
};

const deleteTopic = (req, res, next) => {
  Topic.findOneAndDelete({_id: req.body._id}, (err, data) => {
    if (err) {
      return next(err);
    }
    res.locals.data = data;
    return next();
  })
};

const getNotes = (req, res, next) => {
  return next();
}

module.exports = {
  getAllTopics,
  addTopic,
  deleteTopic,
  getNotes
};
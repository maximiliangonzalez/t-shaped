const { Topic } = require('../models/models');

const getAllTopics = (req, res, next) => {
  Topic.find({}, 'name confident', (err, data) => {
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

const changeConfidence = (req, res, next) => {
  Topic.findOne({_id: req.body._id}, (err, data) => {
    if (err) {
      return next(err);
    }
    data.confident = !data.confident;
    data.save((err, updatedData) => {
      if (err) {
        return next(err);
      }
      res.locals.data = updatedData;
      return next();
    });
  })
};

const getNotes = (req, res, next) => {
  res.locals.data = [];
  return next();
};

module.exports = {
  getAllTopics,
  addTopic,
  deleteTopic,
  getNotes,
  changeConfidence
};
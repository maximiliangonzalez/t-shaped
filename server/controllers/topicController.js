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
  Topic.findOne({_id: req.params._id}, 'notes', (err, data) => {
    if (err) {
      return next(err);
    }
    res.locals.data = data;
    return next();
  });
};

const addNote = (req, res, next) => {
  Topic.findOneAndUpdate({_id: req.body._id}, {$push: {notes: req.body.note}}, (err, data) => {
    if (err) {
      return next(err);
    }
    res.locals.data = data;
    return next();
  });
};

// perhaps update note schema so notes have an ID so this doesn't have to search for an entire piece of text
const deleteNote = (req, res, next) => {
  Topic.findOneAndUpdate({_id: req.body._id}, {$pull: {notes: req.body.note}}, (err, data) => {
    if (err) {
      return next(err);
    }
    res.locals.data = data;
    return next();
  });
};

const updateNote = (req, res, next) => {
  Topic.findOneAndUpdate({_id: req.body._id, notes: req.body.oldNote}, {$set: {"notes.$": req.body.updatedNote}}, (err, data) => {
    if (err) {
      return next(err);
    }
    res.locals.data = data;
    return next();
  });
};

module.exports = {
  getAllTopics,
  addTopic,
  deleteTopic,
  getNotes,
  addNote,
  deleteNote,
  updateNote,
  changeConfidence
};
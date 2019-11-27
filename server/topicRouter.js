const router = require('express').Router();
const { getAllTopics, 
        addTopic, 
        deleteTopic, 
        getNotes, 
        addNote,
        changeConfidence } = require('./controllers/topicController');

router.get('/', getAllTopics, (req, res) => {
  res.status(200).json(res.locals.data);
});

router.post('/', addTopic, (req, res) => {
  res.status(200).json(res.locals.data);
});

router.delete('/', deleteTopic, (req, res) => {
  res.status(200).json(res.locals.data);
});

router.patch('/confidence', changeConfidence, (req, res) => {
  res.status(200).json(res.locals.data);
});

router.get('/notes/:_id', getNotes, (req, res) => {
  res.status(200).json(res.locals.data);
});

router.post('/notes', addNote, (req, res) => {
  res.status(200).json(res.locals.data);
});

module.exports = router;
const router = require('express').Router();
const { getAllTopics, addTopic } = require('./controllers/topicController');

router.get('/', getAllTopics, (req, res) => {
  res.status(200).json(res.locals.data);
});

router.post('/', addTopic, (req, res) => {
  res.json({msg: 'yo'});
});

module.exports = router;
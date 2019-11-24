const router = require('express').Router();
const { getAllTopics } = require('./controllers/topicController');

router.get('/', getAllTopics, (req, res) => {
  res.status(200).json(res.locals.data);
});

module.exports = router;
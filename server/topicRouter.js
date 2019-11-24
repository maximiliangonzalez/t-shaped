const router = require('express').Router();
const { getAllTopics } = require('./controllers/topicController');

router.get('/', getAllTopics, (req, res) => {
  res.status(200).json([1,2,3,4,5]);
});

module.exports = router;
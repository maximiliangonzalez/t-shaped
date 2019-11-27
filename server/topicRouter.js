const router = require('express').Router();
const { getAllTopics, 
        addTopic, 
        deleteTopic, 
        getNotes, 
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

// route to get notes and route to post notes (less important priorities but still do : route to edit or delete a note)
// on the front end, these should show up as some kind of list - new notes and edits should be able to be typed on the modal
// currentTopic can also probably be taken to redux store since it's used in so many places
router.get('/notes/:_id', getNotes, (req, res) => {
  res.status(200).json(res.locals.data);
});

module.exports = router;
const express = require('express');
const path = require('path');
const topicRouter = require('./topicRouter');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'client')));

app.use('/topic', topicRouter);

app.get('*', (req, res) => {
  res.status(404).json('not found');
});

app.use((err, req, res, next) => {
  res.status(400).json({msg: err});
})

app.listen(3000);
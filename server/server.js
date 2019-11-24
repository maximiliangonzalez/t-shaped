const express = require('express');
const path = require('path');
const app = express();
const topicRouter = require('./topicRouter');

app.use(express.static(path.join(__dirname, '..', 'client')));

app.use('/topic', topicRouter);

app.get('*', (req, res) => {
  res.status(404).json('not found');
});

app.use((err, req, res, next) => {
  res.status(400).json(err);
})

app.listen(3000);
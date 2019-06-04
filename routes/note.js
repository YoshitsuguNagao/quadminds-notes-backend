const express = require('express');

const NotePost = require('../models/NotePost');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
  const { title, content } = req.body;
  const note = new NotePost({
    title,
    content,
  });
  const saveNote = note.save()
      .then((response) => {
      res.status(200)
      res.json(response)
    })
    .catch(next)
});

module.exports = router;

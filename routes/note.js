const express = require('express');
const Note = require('../models/Note');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  Note.find()
    .then((Notes) => {
      console.log('Notes', Notes)
      res.status(200)
      res.json(Notes);
    })
    .catch(next)
});

router.post('/', (req, res, next) => {
  const { title, content } = req.body;
  const note = new Note({
    title,
    content,
  });
  note.save()
    .then((response) => {
      res.status(200)
      res.json(response)
    })
    .catch(next)
});

module.exports = router;

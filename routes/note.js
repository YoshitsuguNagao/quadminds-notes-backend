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

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  console.log('id', id)
  Note.findByIdAndDelete(id)
  .then(() => {
    res.status(200);
    res.json({
      data: true
    });
  })
  .catch(next)
});

module.exports = router;

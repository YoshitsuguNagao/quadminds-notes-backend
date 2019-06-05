const express = require('express');
const router = express.Router();

const Note = require('../models/Note');


router.get('/', (req, res, next) => {
  Note.find()
    .then((notes) => {
      res.status(200)
      res.json(notes);
    })
    .catch(next)
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Note.find({_id: id})
    .then((note) => {
      res.status(200);
      res.json(note);
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
    .then((data) => {
      res.status(200)
      res.json(data)
    })
    .catch(next)
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  Note.findByIdAndDelete(id)
  .then(() => {
    res.status(200);
    res.json({
      data: true
    });
  })
  .catch(next)
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const noteToUpdate =req.body;
  Note.findByIdAndUpdate(id, noteToUpdate)
    .then((note) => {
      res.status(200);
      res.json(note);
    })
    .catch(next)
});

router.patch('/:id', (req, res, next) => {
  const { id } = req.params;
  const {name,value} =req.body;
  Note.findById(id)
    .then((note) => {
      note[name] = value
      note.save()
    })
    .then((note) => {
      res.status(200);
      res.json(note);
    })
    .catch(next)
});
module.exports = router;

const express = require('express');
const Note = require('../models/Note');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  Note.find()
    .then((Notes) => {
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
      res.json({
        message: "updated",
        note: note });
    })
    .catch(next)
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const noteToUpdate =req.body;
  Note.findByIdAndUpdate(id, noteToUpdate)
    .then((note) => {
      res.status(200);
      res.json({
        message: "updated",
        note: note });
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
      res.json({
        message: "updated",
        note: note });
    })
    .catch(next)
});
module.exports = router;

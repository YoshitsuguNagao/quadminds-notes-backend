const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NoteModel = require('./Note')

const notesResponseSchema = new Schema({
  data: [NoteModel.schema],
});

const NotesResponse = mongoose.model('NotesResponse', notesResponseSchema);

module.exports = NotesResponse;
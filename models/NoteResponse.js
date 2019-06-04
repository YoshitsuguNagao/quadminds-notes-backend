const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NoteModel = require('./Note')

const noteResponseSchema = new Schema({
  data: NoteModel.schema,
});

const NoteResponse = mongoose.model('NoteResponse', noteResponseSchema);

module.exports = NoteResponse;
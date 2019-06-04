const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notePatchSchema = new Schema({
  title: String,
  content: String,
});

const NotePatch = mongoose.model('NotePatch', notePatchSchema);

module.exports = NotePatch;
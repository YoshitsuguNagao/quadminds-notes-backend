const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notePostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const NotePost = mongoose.model('NotePost', notePostSchema);

module.exports = NotePost;
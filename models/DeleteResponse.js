const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeleteResponseSchema = new Schema({
  data:	Boolean,
});

const DeleteResponse = mongoose.model('DeleteResponse', DeleteResponseSchema);

module.exports = DeleteResponse;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ErrorResponseSchema = new Schema({
  message: { type: String, required: true },
});

const ErrorResponse = mongoose.model('ErrorResponse', ErrorResponseSchema);

module.exports = ErrorResponse;
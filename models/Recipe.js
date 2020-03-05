const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  owner: { type: Types.ObjectId, ref: 'Recipe' }
});

module.exports = model('Recipe', schema);

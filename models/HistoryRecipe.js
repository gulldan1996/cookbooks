const { Schema, model } = require('mongoose');

const historySchema = new Schema({
  name: { type: String, required: true },
  recipeId: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = model('historyRecipe', historySchema);
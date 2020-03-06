const HistoryRecipe = require("../models/HistoryRecipe");

// Get HistoryRecipe
const getHistoryRecipe = async (req, res) => {
  try {
    const recipe = await HistoryRecipe.find();

    res.json(recipe);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
};

// Delete HistoryRecipe
const deleteHistoryRecipe = async (req, res) => {
  try {
    await HistoryRecipe.findByIdAndRemove(req.params.id);

    res.status(201).json({ message: "Good" });
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong!!!" });
  }
};

module.exports = { getHistoryRecipe, deleteHistoryRecipe };

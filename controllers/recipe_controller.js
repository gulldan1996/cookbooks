const Recipe = require('../models/Recipe');
const HistoryRecipe = require("../models/HistoryRecipe");

// Get Recipe
const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.find();

    res.json(recipe)
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  };
}

// Create Recipe
const createRecipe = async (req, res) => {
  try {
    const { name, description, date } =  req.body;

    const recipe = new Recipe({ name, description, date });

    await recipe.save();

    res.status(201).json({ message: 'Good' });


  } catch (e) {
    return res.status(500).json({ message: "Something went wrong!!!" });
  }
}

// Delete Recipe
const deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndRemove(req.params.id)
    await HistoryRecipe.deleteMany({ recipeId: req.params.id })

    res.status(201).json({ message: 'Removed' });

  } catch (e) {
    return res.status(500).json({ message: "Something went wrong!!!" });
  }
}

// Modify Recipe
const modifyRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    const { name, description, date, _id } = recipe;
    const history = new HistoryRecipe({
      name,
      description,
      date,
      recipeId: _id
    });

    await history.save();

    await Recipe.findByIdAndUpdate(req.params.id, { date: Date.now(), ...req.body });

    res.status(201).json({ message: "Recipe was modify" });
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong!!!" });
  }
};

module.exports = { getRecipe, createRecipe, deleteRecipe, modifyRecipe };

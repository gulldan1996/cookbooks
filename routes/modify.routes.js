const { Router } = require("express");
const Recipe = require("../models/Recipe");
const HistoryRecipe = require("../models/HistoryRecipe");
const router = Router();

router.put("/modify/:id", async (req, res) => {
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
});

module.exports = router;

const { Router } = require("express");
const Recipe = require("../models/Recipe");
const router = Router();


router.get("/recipe", async (req, res) => {
  try {
    const recipe = await Recipe.find();

    res.json(recipe)
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  };
});

module.exports = router;

const { Router } = require("express");
const HistoryRecipe = require("../models/HistoryRecipe");
const router = Router();


router.get("/history", async (req, res) => {
  try {
    const recipe = await HistoryRecipe.find();

    res.json(recipe)
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  };
});

module.exports = router;

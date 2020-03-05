const { Router } = require("express");
const Recipe = require('../models/Recipe');
const HistoryRecipe = require('../models/HistoryRecipe');
const router = Router();

router.delete('/delete/:id', async (req, res) => {
  try {
    await Recipe.findByIdAndRemove(req.params.id)
    // сделать чтобы удалило все Хистори которые есть с айди РЕСАЙПАЙДИ

    res.status(201).json({ message: 'Removed' });

  } catch (e) {
    return res.status(500).json({ message: "Something went wrong!!!" });
  }
});

module.exports = router;
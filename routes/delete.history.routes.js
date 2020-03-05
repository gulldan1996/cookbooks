const { Router } = require("express");
const HistoryRecipe = require('../models/HistoryRecipe');
const router = Router();

router.delete('/delete/:id', async (req, res) => {
  try {
    await HistoryRecipe.findByIdAndRemove(req.params.id)

    res.status(201).json({ message: 'Good' });

  } catch (e) {
    return res.status(500).json({ message: "Something went wrong!!!" });
  }
});

module.exports = router;
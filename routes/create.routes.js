const { Router } = require("express");
const Recipe = require('../models/Recipe');
const router = Router();

router.post("/create", async (req, res) => {
  try {
    const { name, description, date } =  req.body;

    const recipe = new Recipe({ name, description, date });

    await recipe.save();

    res.status(201).json({ message: 'Good' });


  } catch (e) {
    return res.status(500).json({ message: "Something went wrong!!!" });
  }
});

module.exports = router;

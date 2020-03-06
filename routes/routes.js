const { Router } = require("express");
const router = Router();
const { getRecipe, createRecipe, deleteRecipe, modifyRecipe } = require("../controllers/recipe_controller");
const { getHistoryRecipe, deleteHistoryRecipe } = require("../controllers/history_controller");

router.get('/api/recipe', getRecipe);
router.post('/api/recipe/create', createRecipe);
router.delete('/api/recipe/delete/:id', deleteRecipe);
router.put('/api/recipe/modify/:id', modifyRecipe);
router.get('/api/history', getHistoryRecipe);
router.delete('/api/history/delete/:id', deleteHistoryRecipe);

module.exports = router;

const router = require("express").Router();
const recipes = require("../../controller/recipeController.js")
// const authMiddleware = require("../../config/middleware/authMiddleware");

// Matches with "/api/recipes"
router
    .route("/")
    .post(recipes.create)
    .get(recipes.findAll)

// Matches with "/api/recipes/:id"
router
    .route("/:id")
    .get(recipes.findById)
    .put(recipes.update)
    .delete(recipes.remove);

module.exports = router
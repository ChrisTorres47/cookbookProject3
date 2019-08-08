const router = require("express").Router();
const recipes = require("../../controller/recipeController")
// const authMiddleware = require("../../config/middleware/authMiddleware");

router
    .route("/")
    .post(recipes.create)
    .get(recipes.findAll)


module.exports = router
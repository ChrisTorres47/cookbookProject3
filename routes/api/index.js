const router = require("express").Router();
const userRoutes = require("./userRoutes");
const todoRoutes = require("./todoRoutes");
const apiPuppy = require("./apiPuppy");
const recipes = require("./recipeRoutes")

router.use("/users", userRoutes);
router.use("/todos", todoRoutes);
router.use("/puppy", apiPuppy);
router.use("/recipes", recipes)

module.exports = router;

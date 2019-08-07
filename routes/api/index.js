const router = require("express").Router();
const userRoutes = require("./userRoutes");
const todoRoutes = require("./todoRoutes");
const apiPuppy = require("./apiPuppy");

router.use("/users", userRoutes);
router.use("/todos", todoRoutes);
router.use("/puppy", apiPuppy);

module.exports = router;

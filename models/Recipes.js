const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    RecipeName: {type: String},
    Ingredients: {type: String},
    Directions: {type: String},
    FoodPhoto: {type: String},
    userID: {type: String, required: true}
})

const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe;
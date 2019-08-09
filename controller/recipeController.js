const db = require("../models");

// Defining methods for the recipeController
module.exports = {
    create: function(req,res){
        db.Recipe
            .create(req.body)
            .then((dbModel) =>{
                console.log(dbModel)
                return db.User.findOneAndUpdate({_id: req.body.userID}, {$push: {recipes: dbModel._id}},{new: true})
            })
            .catch(err => res.status(422).json(err));    
    },
    findAll: function(req,res){
        db.Recipe
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function(req, res) {
        db.Recipe
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Recipe
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Recipe
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
};


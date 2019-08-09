const db = require("../models");

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
    }
}
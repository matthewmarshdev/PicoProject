const db= require ('../models');



module.exports= {
    createUser: function(req, res){
        const dataBaseObject = {
            name: req.body.firstName
        } 
        db.users.create(
            req.body
        )
        .then(function(userData){
            res.send("success!")
        }
        )
        .catch(function(error){
            res.send(error)
        }
        )
    }
}
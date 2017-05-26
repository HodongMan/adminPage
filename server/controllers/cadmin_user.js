'use strict';

const jwt = require("jsonwebtoken");
const cadmin_user = require("../models").cadmin_user;
const cadmin_ad = require("../models").cadmin_ad;


module.exports = {

    login(req, res){

        let login_user = Object.assign({}, req.body);

        return cadmin_user
        .findOne({
            where : {
                email : login_user.email,
            },
        })
        .then((user) => {

            if(!user){
                return res.status(404).send({
                    message : "User Not Found",
                });
            }

            if(user.authenticate(login_user.password)){
                let token = jwt.sign({email : user.email, name : user.name}, 'hodong', {
                    expiresIn : 60 * 60 * 5
                });
                return res.status(202).json({
                    token,
                })
            }else{
                return res.status(404).send({
                    message : "User Invalid Password",
                });
            }

        })
        .catch(error => res.status(400).send(error));
    },

    create(req, res){

        let new_user = Object.assign({salt : "temp"}, req.body);

        return cadmin_user
        .create(new_user)
        .then((user) => {

            if(!user){
                return res.status(404).send({
                    message : "User Not Found",
                });
            }

            let token = jwt.sign({email : user.email, name : user.name}, 'hodong', {
                expiresIn : 60 * 60 * 5
            });
            return res.status(202).json({
                token,
            })

        })
        .catch(error => res.status(400).send(error));

    },

    list(req, res){

        return cadmin_user
        .findById(req.params.email, {
            include : [{
                model : cadmin_ad,
                as : 'cadmin_ads',
            }],
        })
        .then((user) => {

            if(!user){
                res.status(404).send({
                    message : "User Not Found",
                })
            }
            return res.status(200).send(user);
        })
        .catch(error => res.status(400).send(error));
    },

    retrieve(req, res){

        return cadmin_user
        .findById(req.params.email)
        .then((user) => {

            if(!user){
                res.status(404).send({
                    message : "User Not Found",
                })
            }
            return res.status(200).send(user);
        })
        .catch(error => res.status(400).send(error));
    }
}

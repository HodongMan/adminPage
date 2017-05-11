'use strict';

const cadmin_user = require("../models").cadmin_user;
const cadmin_ad = require("../models").cadmin_ad;

module.exports = {

    create(req, res){

        let new_user = Object.assign({}, req.body);

        return cadmin_user
        .create(new_user)
        .then(user => res.status(201).send(user))
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
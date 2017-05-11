'use strict';

const cadmin_ad_limit = require("../models").cadmin_ad_limit;

module.exports = {

    create(req, res){

        let new_ad_limit = Object.assign({ad_id : req.params.ad_id}, req.body);

        return cadmin_ad_limit
        .create(new_ad_limit)
        .then(limit => res.status(200).send(limit))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req, res){

        return cadmin_ad_limit
        .findById(req.params.ad_id)
        .then((limit) => {

            if(!limit){
                return res.status(404).send({
                    message : "Limit Not Found",
                });
            }

            return res.status(200).send(limit);
        })
        .catch(error => res.status(400).send(error));
    },

    update(req, res){

        let new_limit = Object.assign({}, req.body);

        return cadmin_ad_limit
        .findById(req.params.id)
        .then(limit => {

            if(!point){
                return res.status(404).send({
                    message : "Limit Not Found",
                });
            }

            return count
            .update(new_limit)
            .then(() => res.status(200).send(new_limit))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },

}

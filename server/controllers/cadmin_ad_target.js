'use strict';

const cadmin_ad_target = require("../models").cadmin_ad_target;

module.exports = {

    create(req, res){

        let new_ad_target = Object.assign({ad_id : req.params.ad_id}, req.body);

        return cadmin_ad_target
        .create(new_ad_target)
        .then(target => res.status(200).send(target))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req, res){

        return cadmin_ad_target
        .findById(req.params.ad_id)
        .then((target) => {

            if(!target){
                return res.status(404).send({
                    message : "Target Not Found",
                });
            }

            return res.status(200).send(target);
        })
        .catch(error => res.status(400).send(error));
    },

    update(req, res){

        let new_target = Object.assign({}, req.body);

        return cadmin_ad_target
        .findById(req.params.id)
        .then(target => {

            if(!target){
                return res.status(404).send({
                    message : "Target Not Found",
                });
            }

            return target
            .update(new_target)
            .then(() => res.status(200).send(new_target))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },

}

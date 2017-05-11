'use strict';

const cadmin_ad_point = require("../models").cadmin_ad_point;

module.exports = {

    create(req, res){

        let new_ad_point = Object.assign({ad_id : req.params.ad_id}, req.body);

        return cadmin_ad_point
        .create(new_ad_point)
        .then(point => res.status(200).send(point))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req, res){

        return cadmin_ad_point
        .findById(req.params.ad_id)
        .then((point) => {

            if(!point){
                return res.status(404).send({
                    message : "Point Not Found",
                });
            }

            return res.status(200).send(point);
        })
        .catch(error => res.status(400).send(error));
    },

    update(req, res){

        let new_point = Object.assign({}, req.body);

        return cadmin_ad_point
        .findById(req.params.id)
        .then(point => {

            if(!point){
                return res.status(404).send({
                    message : "Point Not Found",
                });
            }

            return point
            .update(new_point)
            .then(() => res.status(200).send(new_point))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },

}

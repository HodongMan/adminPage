'use strict';

const cadmin_ad_detail = require("../models").cadmin_ad_detail;

module.exports = {

    create(req, res){

        let new_ad_detail = Object.assign({ad_id : req.params.ad_id}, req.body);

        return cadmin_ad_detail
        .create(new_ad_detail)
        .then(detail => res.status(201).send(detail))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req, res){

        return cadmin_ad_detail
        .findById(req.params.ad_id)
        .then((detail) => {

            if(!detail){
                return res.status(404).send({
                    message : "Detail Not Found",
                });
            }

            return res.status(200).send(detail);
        })
        .catch(error => res.status(400).send(detail));
    },

    update(req, res){

        let new_detail = Object.assign({}, req.body);

        return cadmin_ad_detail
        .findById(req.params.id)
        .then(detail => {

            if(!detail){
                return res.status(404).send({
                    message : "Detail Not Found",
                });
            }

            return detail
            .update(detail)
            .then(() => res.status(200).send(detail))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },

}

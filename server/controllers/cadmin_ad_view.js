'use strict';

const cadmin_ad_view = require("../models").cadmin_ad_view;

module.exports = {

    create(req, res){

        return cadmin_ad_view
        .create({
            ad_id : req.params.ad_id,
            user_code : req.body.user_code,
            count : 0
        })
        .then(view => res.status(200).send(view))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req, res){

        return cadmin_ad_view
        .findById(req.params.ad_id)
        .then((view) => {

            if(!view){
                return res.status(404).send({
                    message : "View Not Found",
                });
            }

            return res.status(200).send(view);
        })
        .catch(error => res.status(400).send(error));
    },

    update(req, res){

        let new_view = Object.assign({}, req.body);

        return cadmin_ad_view
        .findById(req.params.id)
        .then(view => {

            if(!view){
                return res.status(404).send({
                    message : "Count Not Found",
                });
            }

            return view
            .update(new_view)
            .then(() => res.status(200).send(new_view))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },

}

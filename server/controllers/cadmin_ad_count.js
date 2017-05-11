'use strict';

const cadmin_ad_count = require("../models").cadmin_ad_count;

module.exports = {

    create(req, res){

        return cadmin_ad_count
        .create({
            ad_id : req.params.ad_id,
            view : 0,
            click : 0,
            install : 0,
        })
        .then(count => res.status(200).send(count))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req, res){

        return cadmin_ad_count
        .findById(req.params.ad_id)
        .then((count) => {

            if(!count){
                return res.status(404).send({
                    message : "Count Not Found",
                });
            }

            return res.status(200).send(count);
        })
        .catch(error => res.status(400).send(error));
    },

    update(req, res){

        let new_count = Object.assign({}, req.body);

        return cadmin_ad_count
        .findById(req.params.id)
        .then(count => {

            if(!count){
                return res.status(404).send({
                    message : "Count Not Found",
                });
            }

            return count
            .update(new_count)
            .then(() => res.status(200).send(new_count))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },

}

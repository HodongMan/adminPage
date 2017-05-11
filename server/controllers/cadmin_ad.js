'use strict';

const cadmin_ad = require("../models").cadmin_ad;

module.exports = {

    create(req, res){

        let new_ad = Object.assign({}, req.body);

        return cadmin_ad
        .create(new_ad)
        .then(ad => res.status(201).send(ad))
        .catch(error => res.status(400).send(error));
    },

    list(req, res){

        return cadmin_ad
        .all()
        .then(ads => res.status(200).send(ads))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req, res){

        return cadmin_ad
        .findById(req.params.id)
        .then((ad) => {

            if(!ad){
                return res.status(404).send({
                    message : "Ad Not Found",
                });
            }

            return res.status(200).send(ad);
        })
        .catch(error => res.staus(400).send(error));
    },

    update(req, res){

        let new_ad = Object.assign({}, req.body);

        return cadmin_ad
        .findById(req.params.id)
        .then(ad => {

            if(!ad){
                return res.status(404).send({
                    message : "Ad Not Found",
                });
            }

            return ad
            .update(new_ad)
            .then(() => res.status(200).send(new_ad))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },

    destroy(req, res){

        return cadmin_ad
        .findById(req.params.id)
        .then(ad => {

            if(!ad){
                return res.status(400).send({
                    message : "Ad Not Found",
                });
            }

            return ad
            .destroy()
            .then(() => res.status(204).send())
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },
}

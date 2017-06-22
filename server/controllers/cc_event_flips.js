'use strict';

const cc_event_flips = require("../models").cc_event_flips;

module.exports = {

    create(req, res){

        let new_flips = Object.assign({event_id : req.params.event_id}, req.body);

        return cc_event_flips
        .create(new_flips)
        .then(flip => res.status(201).send(flip))
        .catch(error => res.status(400).send(error));
    },

    list(req, res){

        return cc_event_flips
        .all()
        .then(flip => res.status(201).send(flip))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req, res){

        let new_flips = Object.assign({}, req.body);

        return cc_event_flips
        .update(new_flips, {
            where : {
                event_id : req.params.event_id,
            }
        })
        .then(flip => res.status(201).send(flip))
        .catch(error => res.status(400).send(error));
    },

    update(req, res){

    },

    destroy(req, res){

    },
}

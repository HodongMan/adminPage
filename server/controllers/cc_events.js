'use strict';

const cc_events = require("../models").cc_events;

module.exports = {

    create(req, res){

        let new_events = Object.assign({}, req.body);

        return cc_events
        .create(new_events)
        .then(events => res.status(201).send(events))
        .catch(error => res.status(400).send(error));
    },

    list(req, res){

        return cc_events
        .all()
        .then(events => res.status(201).send(events))
        .catch(error => res.status(400).send(error));
    },

    retrieve(req, res){

    },

    update(req, res){

    },

    destroy(req, res){

    },
}

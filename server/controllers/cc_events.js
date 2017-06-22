'use strict';

const cc_events = require("../models").cc_events;
const cc_event_flips = require("../models").cc_event_flips;

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
        .findAll({
            include : [{
                model: cc_event_flips,
                as: 'cc_event_flips',
            }],
        })
        .then(events => res.status(201).send(events))
        .catch(error => res.status(400).send(error));
    },

    flipRetrieve(req, res){

        return cc_events
        .findOne({
            where : {
                user_code : req.params.user_code,
            },
            include: [{
                model : cc_event_flips,
                as: 'cc_event_flips',
            }],
        })
        .then(events => res.status(201).send(events))
        .catch(error => res.status(400).send(error));
    },

    update(req, res){

    },

    destroy(req, res){

    },
}

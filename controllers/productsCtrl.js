'use strict';

const { getAll, getOne, postOne, putOne } = require('../models/Product');


module.exports.getAllProducts = (req, res, next) => {
    getAll()
        .then(products => res.status(200).json(products))
        .catch(err => next(err));
};

module.exports.getOneProduct = (req, res, next) => {
    getOne(req.params.id)
        .then(product => res.status(200).json(product))
        .catch(err => next(err));
}

module.exports.postProduct = (req, res, next) => {
    postOne(req.body)
        .then(product => res.status(200).json(product))
        .catch(err => next(err));
}

module.exports.putProduct = (req, res, next) => {
    putOne(req.params.id, req.body)
        .then(product => res.status(200).json(product))
        .catch(err => next(err));
}
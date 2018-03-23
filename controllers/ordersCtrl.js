"use strict";

const { getAll, getOne, postOne, putOne, deleteOne, getOneActive } = require("../models/Order");

// GET
module.exports.getAllOrders = (req, res, next) => {
  getAll()
    .then(orders => {
      res.status(200).json(orders);
    })
    .catch(err => next(err));
};

module.exports.getOneOrder = ( { params: { id } }, res, next) => {
    getOne(id)
    .then(order => {
        if (order) {
            res.status(200).json(order);
        } else {
            let error = new Error("Order not found")
            next(error)
        }
    })
    .catch(err => next(err));  
};

// POST
module.exports.postOneOrder = (req, res, next) => {
    postOne(req.body)
    .then(order => {
        res.status(200).json(order)
    })
    .catch(err => next(err));
}

// PUT
module.exports.putOneOrder = (req, res, next) => {
    putOne(req.params, req.body)
    .then(order => {
        res.status(200).json(order)
    })
    .catch(err => next(err));
}



// DELETE
module.exports.deleteOneOrder = (req, res, next) => {
    getOneActive(req.params.id)
    .then(orders => {
        console.log('orders', orders);
        if (orders.payment_type === null) {
            deleteOne(req.params.id)
            .then(order => {
                res.status(200).json(order)
            })
            .catch(err => next(err));
        }
    })
    // if ( // orders.order_id=${id} and orders.payment_type=null ) {
    //     // delete * from orders where orders.order_id=${id} and payment_type=null, AND delete * from order_products where order_products.order_id = ${id} 
    // } else {
    //     let error = new Error("You cannot delete an order that has been completed")
    //     error.status = 405;
    //     next(error)
    // }
};


'use strict';

const { Router } = require('express');
const path = require('path');
const productRouter = Router();
const { getAllProducts, 
        getOneProduct, 
        postProduct,
        putProduct } = require('../controllers/productsCtrl');


productRouter.get('/product', getAllProducts);
productRouter.get('/product/:id', getOneProduct);
productRouter.post('/product', postProduct);
productRouter.put('/product/:id', putProduct);

module.exports = productRouter;
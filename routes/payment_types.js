const { Router } = require('express');
const payTypeRouter = Router();
const { getAllPaymentTypes, getOnePaymentType, postOnePaymentType, putOnePaymentType, deleteOnePaymentType } = require('../controllers/paymentTypeCtrl.js'); 

payTypeRouter.get('/payment_types', getAllPaymentTypes);
payTypeRouter.get('/payment_types/:id', getOnePaymentType);
payTypeRouter.post('/payment_types', postOnePaymentType);
payTypeRouter.put('/payment_types/:id', putOnePaymentType);
payTypeRouter.delete('/payment_types', deleteOnePaymentType);


module.exports = payTypeRouter;
const { Router } = require('express');
const router = Router();

// router.use(require('./<FILE NAME>));
router.use(require('./orders'));
router.use(require('./customerRoute'));
router.use(require('./computers'));

module.exports = router;
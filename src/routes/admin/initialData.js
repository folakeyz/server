const express = require('express');
const { initialData } = require('../../controller/admin/intialData');
const router = express.Router();

router.post('/initialdata', initialData);




module.exports = router;
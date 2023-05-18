require('dotenv').config();
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/device/status', controller.getDeviceStatus);

module.exports = router;

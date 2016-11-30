var express = require('express');
var router = express.Router();

var Player = require('../../mongo/schema/sk_player');

var LoginFun = require('./login/login.js');

var uploadMugshot = require('./mugshot/uploadMug');

router.post('/login', LoginFun);
router.post('/upload_mugshot', uploadMugshot);

module.exports = router;
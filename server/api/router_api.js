var express = require('express');
var api_router = express.Router();
var bodyParser = require('body-parser');

var adminRouter = require('./admin/admin_router');
var playerRouter = require('./player/player_router');
var gameRouter = require('./game/game_router');

api_router.use(bodyParser.json({
    limit: '10mb'
}));

api_router.use(function timeLog(req, res, next) {
    console.log('get api request');
    console.log(req.body);
    next();
})

api_router.use('/admin', adminRouter);
api_router.use('/player', playerRouter);
api_router.use('/game', gameRouter);

module.exports = api_router;
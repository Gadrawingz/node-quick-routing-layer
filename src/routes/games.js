const { Router } = require('express');
const { GameController } = require('../controllers/games');

const router = Router();

router.get('/api/v1/games', GameController.getAllGames);
router.get('/api/v1/games/:gameId', GameController.getGameById);
router.get('/api/v1/games/:gameId/users', GameController.getUsersFromGame);

module.exports = { router };
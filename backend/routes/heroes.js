const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroesController');

// Routes
router.get('/', heroesController.getAllHeroes);
router.get('/:id', heroesController.getHeroById);
router.post('/', heroesController.createHero);
router.put('/:id', heroesController.updateHero);
router.delete('/:id', heroesController.deleteHero);

module.exports = router;
const Hero = require('../models/hero');

// Get all heroes
exports.getAllHeroes = async (req, res) => {
  try {
    const heroes = await Hero.find();
    res.status(200).json(heroes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching heroes', error });
  }
};

// Get hero by ID
exports.getHeroById = async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.id);
    if (!hero) return res.status(404).json({ message: 'Hero not found' });
    res.status(200).json(hero);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hero', error });
  }
};

// Create a new hero
exports.createHero = async (req, res) => {
  try {
    const newHero = new Hero(req.body);
    await newHero.save();
    res.status(201).json(newHero);
  } catch (error) {
    res.status(500).json({ message: 'Error creating hero', error });
  }
};

// Update a hero
exports.updateHero = async (req, res) => {
  try {
    const updatedHero = await Hero.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedHero) return res.status(404).json({ message: 'Hero not found' });
    res.status(200).json(updatedHero);
  } catch (error) {
    res.status(500).json({ message: 'Error updating hero', error });
  }
};

// Delete a hero
exports.deleteHero = async (req, res) => {
  try {
    const heroId = req.params.id;
    await Hero.findByIdAndDelete(heroId);
    res.status(200).json({ message: 'Hero deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete hero' });
  }
};

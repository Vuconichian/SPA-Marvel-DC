const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Hero = require('./models/hero');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/superheroes';
const DATA_FILE = path.join(__dirname, 'data', 'heroes.json');

const loadHeroes = () => {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8').trim();

    if (!raw) {
        return [];
    }

    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch (error) {
        throw new Error(`El archivo ${DATA_FILE} no tiene JSON valido.`);
    }

    if (!Array.isArray(parsed)) {
        throw new Error(`El archivo ${DATA_FILE} debe contener un arreglo de heroes.`);
    }

    return parsed;
};

const seed = async () => {
    try {
        const heroes = loadHeroes();

        await mongoose.connect(MONGO_URI);

        if (heroes.length === 0) {
            console.log('No hay heroes para insertar en data/heroes.json.');
            return;
        }

        const inserted = await Hero.insertMany(heroes, { ordered: true });
        console.log(`Se insertaron ${inserted.length} heroes correctamente.`);
    } catch (error) {
        console.error('Error ejecutando seed:', error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.connection.close();
    }
};

seed();

const mongoose = require("mongoose")

const heroSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },

    nombreReal: {
        type: String
    },

    anioAparicion: {
        type: Number,
        required: true
    },

    casa: {
        type: String,
        enum: ["Marvel", "DC"],
        required: true
    },

    biografia: {
        type: String,
        required: true
    },

    equipamiento: {
        type: [String]
    },

    imagenes: {
        type: [String],
        required: true
    }

})

module.exports = mongoose.model("Hero", heroSchema);
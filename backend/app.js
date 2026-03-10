const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const Hero = require("./models/hero")
const heroesRoutes = require('./routes/heroes')

const app = express()

app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/superheroes', {
}).then(() => {
  console.log('Connected to MongoDB')
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error)
})

.then(() => console.log("Mongo conectado"))
.catch(err => console.log(err))

app.get("/", (req,res)=>{
    res.send("API funcionando")
})

app.post("/heroes", async (req, res) => {
    try {
        const nuevoHeroe = new Hero(req.body);
        await nuevoHeroe.save();
        res.status(201).send("Héroe creado exitosamente");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al crear el héroe");
    }
});

app.get("/heroes", async (req, res) => {
    try {
        const heroes = await Hero.find();
        res.status(200).json(heroes);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los héroes");
    }
});

app.delete("/heroes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Hero.findByIdAndDelete(id);
        res.status(200).send("Héroe eliminado exitosamente");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar el héroe");
    }
});

app.use('/api/heroes', heroesRoutes);

app.listen(3000, ()=>{
    console.log("Servidor corriendo en puerto 3000")
})
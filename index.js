const fastify = require('fastify');
const app = fastify();
const mongoose = require('mongoose');
const { ReactionCollector } = require('discord.js');


mongoose.connect('mongodb+srv://Thibaut:Thibaut1@cluster0.rji1t.mongodb.net/tpnode?retryWrites=true&w=majority') 


const filmSchema = {
    id:{type:Number,required:true},
    name: { type: String, required: true },
    desc: {type:String, required:true},
    acteurs:{ type:String, required:true},
    nbIn:{type:Number, required:true}
};

const Film = mongoose.model('Film', filmSchema);


//Recupére tout les films
app.get('/film', async (req,res) => {
    let films = await Film.find({});
    res.status(200).send(films)
})

//Recupére le film avec le nom
app.get('/film/:name', async (req,res) => {
    let films = await Film.find({})
    let filmName = films.filter(f=>f.name==req.params.name)

    if (filmName.length){
        await Film.findById(filmName[0]._id)
        res.status(200).send(filmName)
    }else{
        res.send("Le film n'existe pas")
    }
})

//Ajoute un film
app.post('/film', async (req,res) => {
    let film = req.body;
    let films = await Film.create(film);
    res.status(200).send(films)
})

//Modification du film choisis et ne met a jour que les champs necessaire
app.put('/film/:name', async (req,res) => {
    let films = await Film.find({})
    let filmName = films.filter(f=>f.name==req.params.name)
    let update = req.body;

    if (filmName.length){
        await Film.findByIdAndUpdate(films, update)
        let filmToUpdate = await Film.findById(filmName[0]._id)
        res.status(200).send(filmToUpdate)
    }else{
        res.send("Le film n'existe pas")
    }
})

//Supprime le film choisis via le nom
app.delete('/film/:name', async (req,res) => {
    let films = await Film.find({})
    
    let filmName = films.filter(f=>f.name==req.params.name)
    if (filmName.length){
        await Film.findByIdAndDelete(filmName[0]._id)
        res.status(200).send(films)
    }else{
        res.send("Le film n'existe pas")
    }
})

app.listen(3000, () => {
    console.log("Server running")
  })
const fastify = require('fastify');
const app = fastify();
const films = require('./films.json')
const mongoose = require('mongoose');
const { ReactionCollector } = require('discord.js');


mongoose.connect('mongodb+srv://Thibaut:Thibaut1@cluster0.rji1t.mongodb.net/tpnode?retryWrites=true&w=majority') 


const filmSchema = {
    id:{},
    name: { type: String, required: true },
    desc: {type:String, required:true},
    acteurs:{ type:String, required:true},
    nbIn:{type:Number, required:true}
};

const Film = mongoose.model('Film', filmSchema);

//Recupére tout les films
app.get('/film', async (req,res) => {
    let films = await Film.find({});
    res.status(200).json(films)
})

//Recupére le film avec l'id choisis
app.get('/film/:id', async (req,res) => {
//Chercher par name ou _id
    let films = await Film.findById(req.params.id)
    res.status(200).json(films)

})

//Ajoute un film
app.post('/film', (req,res) => {
    films.push(req.body)
    res.status(200).json(films)
})

//Modification du film choisis et ne met a jour que les champs necessaire
app.patch('/film/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const film = films.find(film => film.id === id)
    film.name =req.body.name,
    film.desc =req.body.desc,
    film.acteurs =req.body.acteurs,
    film.nbIn =req.body.nbIn,
    res.status(200).json(film)
})

//Supprime le film choisis
app.delete('/film/:name', async (req,res) => {
    // const id = parseInt(req.params.id)
    // const film = films.find(film => film.id === id)
    // films.splice(films.indexOf(film),1)
    let films = await Film.find({})
    
    let filmName = films.filter(f=>f.name==req.params.name)
    if (filmName.length){
        await Film.findByIdAndDelete(filmName[0]._id)
        res.status(200).json(films)
    }else{
        res.send("Le film n'existe pas")
    }
})


//Modif nombre d'entrées
// app.patch('/films/nbin/:id'),(req,res)=>{
//     const id = parseInt(req.params.id)
//     const film = films.find(film => film.id === id)
//     film.nbIn =req.body.nbIn,
//     res.status(200).json(film)
// }


app.listen(3000, () => {
    console.log("Server running")
  })
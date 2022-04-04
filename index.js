const express = require('express')
const app = express()
const films = require('./films.json')

// Middleware
app.use(express.json())

//Recupére tout les films
app.get('/film', (req,res) => {
    res.status(200).json(films)
})

//Recupére le film avec l'id choisis
app.get('/film/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const film = films.find(film => film.id === id)
    res.status(200).json(film)
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
app.delete('/film/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const film = films.find(film => film.id === id)
    films.splice(films.indexOf(film),1)
    res.status(200).json(films)
})

//Modif nombre d'entrées
app.patch('/films/nbin/:id'),(req,res)=>{
    const id = parseInt(req.params.id)
    const film = films.find(film => film.id === id)
    film.nbIn =req.body.nbIn,
    res.status(200).json(film)
}


app.listen(3000, () => {
    console.log("Server ON")
  })
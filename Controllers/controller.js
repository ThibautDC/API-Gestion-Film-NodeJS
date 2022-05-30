const Film=require('../Models/filmSchema');

//Ajoute 1 film
let addFilm=async (req,res)=>{

    let film = req.body;
    let films = await Film.create(film);
    res.status(200).send(films)
}

//Récupere tout les films
let getFilms=async (req,res)=>{
  
    let films = await Film.find({});
    res.status(200).send(films)
}

//Récupere 1 seul film grace a l'id
let getFilm=async (req,res)=>{
 
    let films = await Film.findById(req.params.id)
    res.status(200).send(films)
}

//Supprime 1 film grace a l'id
let deleteFilm=async (req,res)=>{
   
    let films = await Film.findByIdAndDelete(req.params.id)
    res.status(200).send(films)
}

//Met a jour 1 film grace a l'id
let updateFilm=async (req,res)=>{

    const id=req.params.id;
    const updateFilm=req.body;
    const films=await Film.findByIdAndUpdate(id,updateFilm);
    res.status(200).send(films);
}

module.exports={
    addFilm,
    getFilms,
    getFilm,
    deleteFilm,
    updateFilm
}
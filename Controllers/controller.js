const Film=require('../Models/filmSchema');

let addFilm=async (req,res)=>{

    let film = req.body;
    let films = await Film.create(film);
    res.status(200).send(films)

}

let getFilms=async (req,res)=>{
  
    let films = await Film.find({});
    res.status(200).send(films)

}

let getAFilm=async (req,res)=>{
 
    let films = await Film.findById(req.params.id)
    res.status(200).send(films)

}

let deleteFilm=async (req,res)=>{
   
    let films = await Film.findByIdAndDelete(req.params.id)
    res.status(200).send(films)

}
let updateFilm=async (request,reply)=>{

        const id=request.params.id;
        const updateFilm=request.body;
        //to update the todo
        const films=await Film.findByIdAndUpdate(id,updateFilm);
        //existed todo
        reply.send(films);
}

module.exports={
    addFilm,
    getFilms,
    getAFilm,
    deleteFilm,
    updateFilm
}
const mongoose=require('mongoose');

//Schema d'un film pour la BDD
const filmSchema = new mongoose.Schema({
    _id:{type:String,required:true},
    name: { type: String, required: true },
    desc: {type:String, required:true},
    acteurs:{ type:String, required:true},
    nbIn:{type:Number, required:true}
});

module.exports=mongoose.model('Film',filmSchema);
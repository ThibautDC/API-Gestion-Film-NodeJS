const mongoose=require('mongoose');

const filmSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    name: { type: String, required: true },
    desc: {type:String, required:true},
    acteurs:{ type:String, required:true},
    nbIn:{type:Number, required:true}
});

module.exports=mongoose.model('Film',filmSchema);
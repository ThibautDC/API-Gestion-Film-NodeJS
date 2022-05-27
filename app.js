const fastify=require('fastify')({logger:true});

const mongoose=require('mongoose');
const routes=require('./routes/routes');

mongoose.connect('mongodb+srv://Thibaut:Thibaut1@cluster0.rji1t.mongodb.net/tpnode?retryWrites=true&w=majority')
.then(()=>console.log('Database Connected'))
.catch((err)=>console.log(err));

routes.forEach((route, index)=>{
    fastify.route(route)
})

const start = async () => {
    try {
      await fastify.listen(3000)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  };
  start();
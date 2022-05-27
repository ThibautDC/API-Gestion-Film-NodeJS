const  controllers=require('../Controllers/controller')

const routes=[
    {
        method: 'POST',
        url: '/addFilm',
        handler:controllers.addFilm
    },
    {
        method: 'GET',
        url: '/getFilms',
        handler:controllers.getFilms
    },
    {
        method: 'GET',
        url: '/getAFilm/:id',
        handler:controllers.getAFilm
    },
    {
        method: 'DELETE',
        url: '/deleteFilm/:id',
        handler:controllers.deleteFilm
    },
    {
        method: 'PUT',
        url: '/updateFilm/:id',
        handler:controllers.updateFilm
    }
]

module.exports=routes;
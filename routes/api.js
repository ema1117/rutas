const express = require('express')
const router = express.Router()
const apiController = require('../controllers/apiControllers')
//const {validarID} = require('../middleware/validar')
const checks = require('../middleware/checks')
const { validarChecks} = require('../middleware/validarChecks') 
const { validarID } = require('../middleware/validar')

//obtiene la lista de farmacia
router.get('/ver',apiController.apiGet)

//carga un item de farmacia
router.post('/crear',checks,validarChecks,apiController.apiPost)

//editar un item de farmcia/* 
router.put('/editar/:id',validarID,checks,validarChecks,apiController.apiPut)

//borrar un item
router.delete('/borrar/:id',validarID,apiController.apiDelete)

//me conecto la pokeapi, y trae la cantidad que le mando por parametros
router.get('/verpokeApi/:cantidad',async (req,res) => {
    try {
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit='+req.params.cantidad)                
        return res.json(data)
    } catch (error) {
        return error
    }    
   
} )


//traigo la pagina indicada por parametros de rick and morty
router.get('/rickandmorty/:pagina',async (req,res) => {
    try {
        const {data} = await axios.get('https://rickandmortyapi.com/api/character/?page='+req.params.pagina)                
        return res.json(data)
    } catch (error) {
        return error
    }        

})







module.exports = router
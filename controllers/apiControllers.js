const {Farmacia} = require('../db/models/Farmacia')

const apiController = {
    async apiGet(req,res){
        const listadoFarmacia = await Farmacia.find()
        res.json(listadoFarmacia)
    },
    async apiPost(req,res){
        try{
            const nuevoFarmacia = new Farmacia(req.body)
            await nuevoFarmacia.save()
            res.status(201).json(nuevoFarmacia)
        }catch(error){
            res.status(400).json(error)
        }
    },
    async apiPut(req,res){
        await Farmacia.findByIdAndUpdate(req.params.id,req.body)
        const editado = await Farmacia.findById(req.params.id)
        res.status(201).json(editado)
    },
    async apiDelete(req,res){
        await Farmacia.findByIdAndDelete(req.params.id)
        res.status(200).send('se borro el alumno')
    }

}


module.exports = apiController
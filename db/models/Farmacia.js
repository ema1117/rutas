const {Schema,model} = require('mongoose')

const schema = new Schema({
    Producto:{
        type:String,
        required:true
    },
    Droga:{
        type:String,
        required:true
    },  
    precio:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    Laboratorio:{
        type:String,
        required:true
    },
    Indicacion:{
        type:String
      
        
    },
    Importado:{
        type:Boolean,
        required:true
    }

})

const Farmacia = model('Farmacia',schema) // colection == alumnos

module.exports = {Farmacia}
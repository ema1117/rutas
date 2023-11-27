const {check} = require('express-validator')

const checks = [
    check('Producto')
        .notEmpty().withMessage('el campo producto es quequerido')
        .isString().withMessage('el campo solo permite strings'),  
    check('Droga')
        .notEmpty().withMessage('el campo droga es quequerido')
        .isString().withMessage('el campo solo permite strings'),  
    check('precio')
        .notEmpty().withMessage('el campo precio es quequerido')
        .isNumeric().withMessage('el campo debe ser numerico'),
    check('stock')
        .notEmpty().withMessage('el campo stock es quequerido')
        .isNumeric().withMessage('el campo debe ser numerico'),
    check('Laboratorio')
        .notEmpty().withMessage('el campo Laboratorio es quequerido')
        .isString().withMessage('el campo solo permite strings'),  
    check('Importado')
        .notEmpty().withMessage('el campo Laboratorio es quequerido')
        .isBoolean().withMessage('el campo debe ser booleano')
]

module.exports = checks
const Product = require('../models/produto')

exports.createProduct = async (req, res) => {
    try{
        const { nome } = req.body
        const product = await Product.create({ nome })
        res.status(201).json(product)
    } catch {
        res.status(500).json({error: 'Erro ao criar produto'})
    }
}

exports.getProduct = async (req, res) => {
    try{
        const products  = await Product.findAll()
        res.status(200).json(products)
    } catch {
        res.status(500).json({error: 'Erro ao criar produto'})
    }
}
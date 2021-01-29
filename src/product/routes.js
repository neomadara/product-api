const express = require('express');
const Product = require('./model')
const router = new express.Router();
const PATH = '/product'

const logger = console

router.post(PATH, async (req, res) => {
    const product = new Product(req.body)
    try {
        await product.save()
        logger.log('producto creado exitosamente')
        res.status(201).send(product)
    } catch (e) {
        logger.log('error en producto', e.message)
        res.status(500).send({error: e.message})
    }
})

module.exports = router

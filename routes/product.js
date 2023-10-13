
/**
 * @swagger
 * /products:
 *   get:
 *     description: Returns all products
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of products
 *         schema:
 *           $ref: '#/definitions/Product'
 */


/**
 * @swagger
 * /products/{id}:
 *   get:
 *     description: Returns a single product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the product
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A single product
 *         schema:
 *           $ref: '#/definitions/Product'
 *       404:
 *         description: Product not found
 */

const express = require('express')
const router = express.Router()

const products = require('../data/productsData')


router.get('/', (req, res) => {
    res.status(200).json(products)
})

router.get('/:id', (req, res) => {
    const productId = parseInt(req.params.id)
    const product = products.find(product => product.id === productId)

    if (product) return res.status(200).json(product)

    res.status(404).json({
        message: 'Product not found'
    })
})


/**
 * @swagger
 * definitions:
 *   Product:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 *       category:
 *         type: string
 *       price:
 *         type: number
 *         format: double
 */


module.exports = router
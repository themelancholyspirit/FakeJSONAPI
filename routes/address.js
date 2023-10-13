
/**
 * @swagger
 * /addresses:
 *   get:
 *     description: Returns all addresses
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of addresses
 *         schema:
 *           $ref: '#/definitions/Address'
 */

/**
 * @swagger
 * /addresses/{id}:
 *   get:
 *     description: Returns an address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the address
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An address
 *         schema:
 *           $ref: '#/definitions/Address'
 *       404:
 *         description: Address not found
 */

const express = require('express')
const router = express.Router();

const addresses = require('../data/addressesData')


/**
 * @swagger
 * definitions:
 *   Address:
 *     type: object
 *     properties:
 *       street:
 *         type: string
 *       city:
 *         type: string
 *       state:
 *         type: string
 *       country:
 *         type: string
 *       postalCode:
 *         type: string
 */


router.get('/', (req, res) => {
    res.status(200).json(addresses)
})

router.get('/:id', (req,res) => {
    const addressId = parseInt(req.params.id)
    const address = addresses.find(address => address.id === addressId)
    
    if (address) return res.status(200).json(address)

    res.status(404).json(
        {
            message: 'Address not found'
        }
    )

})



module.exports = router
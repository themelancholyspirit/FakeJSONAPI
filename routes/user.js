/**
 * @swagger
 * /users:
 *   get:
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/User'
 */


/**
 * @swagger
 * /users/{id}:
 *   get:
 *     description: Returns a single user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A single user
 *         schema:
 *           $ref: '#/definitions/User'
 *       404:
 *         description: User not found
 */


const express = require('express');
const router = express.Router();

const users = require('../data/usersData')

/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       name:
 *         type: string
 *       age:
 *         type: integer
 *       occupation:
 *         type: string
 */
router.get('/', (req, res) => {
    res.status(200).json(users)
});

router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id)
    const user = users.find(user => user.id === userId)

    if (user) return res.status(200).json(user)

    res.status(404).json(
        {
            message: 'User not found'
        }
    )
})


module.exports = router;

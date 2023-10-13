
/**
 * @swagger
 * /comments:
 *   get:
 *     description: Returns all comments
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of comments
 *         schema:
 *           $ref: '#/definitions/Comment'
 */

/**
 * @swagger
 * /comments/{id}:
 *   get:
 *     description: Returns a single comment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the comment
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A single comment
 *         schema:
 *           $ref: '#/definitions/Comment'
 *       404:
 *         description: Comment not found
 */


const express = require('express')
const router = express.Router()

const comments = require('../data/commentsData')

router.get('/', (req, res) => {
    res.status(200).json(comments)
})

router.get('/:id', (req, res) => {
    const commentId = parseInt(req.params.id)
    const comment = comments.find(comment => comment.id === commentId)

    if (comment) return res.status(200).json(comment)

    res.status(404).json({
        message: 'Comment not found'
    })
})


/**
 * @swagger
 * definitions:
 *   Comment:
 *     type: object
 *     properties:
 *       userId:
 *         type: integer
 *       postId:
 *         type: integer
 *       content:
 *         type: string
 *       timestamp:
 *         type: string
 *         format: date-time
 */


module.exports = router
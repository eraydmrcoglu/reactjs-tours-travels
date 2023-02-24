import express from 'express'
import { createReview } from '../Controllers/reviewController.js'
import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/:tourId', verifyUser, createReview)

export default router
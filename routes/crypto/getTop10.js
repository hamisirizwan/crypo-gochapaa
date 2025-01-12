import express from 'express';
import { getTop10Cryptocurrencies } from '../../controllers/crypto/index.js';

const router = express.Router();

/**
 * @swagger
 * /api/crypto/top10:
 *   get:
 *     summary: Get top 10 cryptocurrencies
 *     tags: [Crypto]
 *     responses:
 *       200:
 *         description: Top 10 cryptocurrencies retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       symbol:
 *                         type: string
 *                       name:
 *                         type: string
 *                       price:
 *                         type: number
 *                       marketCap:
 *                         type: number
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 */
router.get('/', getTop10Cryptocurrencies);

export default router;


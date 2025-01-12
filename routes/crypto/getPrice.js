import express from 'express';
import { getCryptocurrencyPrice } from '../../controllers/crypto/index.js';

const router = express.Router();

/**
 * @swagger
 * /api/crypto/{symbol}/price:
 *   get:
 *     summary: Get cryptocurrency price by symbol
 *     tags: [Crypto]
 *     parameters:
 *       - in: path
 *         name: symbol
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cryptocurrency price retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     symbol:
 *                       type: string
 *                     price:
 *                       type: number
 */
router.get('/:symbol/price', getCryptocurrencyPrice);

export default router;


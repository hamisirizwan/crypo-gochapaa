import express from 'express';
import { getPortfolio } from '../../controllers/portfolio/index.js';

const router = express.Router();

/**
 * @swagger
 * /api/portfolio:
 *   get:
 *     summary: Get user's portfolio
 *     tags: [Portfolio]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Portfolio retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Portfolio'
 */
router.get('/', getPortfolio);

export default router;


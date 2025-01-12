import express from 'express';
import { createPortfolioEntry } from '../../controllers/portfolio/index.js';

const router = express.Router();

/**
 * @swagger
 * /api/portfolio:
 *   post:
 *     summary: Create a new portfolio entry
 *     tags: [Portfolio]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               crypto:
 *                 type: string
 *               buyingPrice:
 *                 type: number
 *               quantity:
 *                 type: number
 *     responses:
 *       201:
 *         description: Portfolio entry created successfully
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
router.post('/', createPortfolioEntry);

export default router;


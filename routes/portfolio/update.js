import express from 'express';
import { updatePortfolioEntry } from '../../controllers/portfolio/index.js';

const router = express.Router();

/**
 * @swagger
 * /api/portfolio/{crypto}:
 *   put:
 *     summary: Update a portfolio entry
 *     tags: [Portfolio]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: crypto
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               buyingPrice:
 *                 type: number
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Portfolio entry updated successfully
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
router.put('/:crypto', updatePortfolioEntry);

export default router;


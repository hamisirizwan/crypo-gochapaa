import express from 'express';
import { deletePortfolioEntry } from '../../controllers/portfolio/index.js';

const router = express.Router();

/**
 * @swagger
 * /api/portfolio/{crypto}:
 *   delete:
 *     summary: Delete a portfolio entry
 *     tags: [Portfolio]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: crypto
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Portfolio entry deleted successfully
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
router.delete('/:crypto', deletePortfolioEntry);

export default router;


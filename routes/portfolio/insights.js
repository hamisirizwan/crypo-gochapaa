import express from 'express';
import { getPortfolioInsights } from '../../controllers/portfolio/index.js';

const router = express.Router();

/**
 * @swagger
 * /api/portfolio/insights:
 *   get:
 *     summary: Get portfolio insights
 *     tags: [Portfolio]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Portfolio insights retrieved successfully
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
 *                     totalValue:
 *                       type: number
 *                     totalInvestment:
 *                       type: number
 *                     percentageGrowth:
 *                       type: number
 */
router.get('/insights', getPortfolioInsights);

export default router;


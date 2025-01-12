import express from 'express';
import cryptoRoutes from './crypto/index.js';
import portfolioRoutes from './portfolio/index.js';
import authRoutes from './auth/index.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/crypto', cryptoRoutes);
router.use('/portfolio', portfolioRoutes);

export default router;


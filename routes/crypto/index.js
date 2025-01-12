import express from 'express';
import getTop10Router from './getTop10.js';
import getPriceRouter from './getPrice.js';

const router = express.Router();

router.use('/top10', getTop10Router);
router.use('/', getPriceRouter);

export default router;


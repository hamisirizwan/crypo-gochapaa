import express from 'express';
import { auth } from '../../middleware/auth.js';
import createRouter from './create.js';
import getRouter from './get.js';
import updateRouter from './update.js';
import deleteRouter from './delete.js';
import insightsRouter from './insights.js';

const router = express.Router();

router.use('/', auth, createRouter);
router.use('/', auth, getRouter);
router.use('/', auth, updateRouter);
router.use('/', auth, deleteRouter);
router.use('/', auth, insightsRouter);

export default router;


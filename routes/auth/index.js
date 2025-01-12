import express from 'express';
import registerRouter from './register.js';
import loginRouter from './login.js';

const router = express.Router();

router.use('/register', registerRouter);
router.use('/login', loginRouter);

export default router;


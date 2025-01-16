import User from '../../models/User.js';
import jwt from 'jsonwebtoken';

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        errorCode: 401,
        errorMessage: 'Invalid credentials'
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });


    res.status(200).json({
      message: 'User logged in successfully',
      data: { user, token }
    });
  } catch (error) {
    next(error);
  }
};


import User from '../../models/User.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({
      username,
    })

    if(existingUser){
      return res.status(401).json({
        errorCode: 400,
        errorMessage: `User with username ${username} already exists`
      });
    }

    const user = new User({ username, password });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

   
    res.status(201).json({
      message: 'User registered successfully',
      data: { user, token }
    });
  } catch (error) {
    next(error);
  }
};


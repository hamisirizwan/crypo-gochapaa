import Portfolio from '../../models/Portfolio.js';

export const getPortfolio = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const portfolio = await Portfolio.findOne({ user: userId });

    if (!portfolio) {
      return res.status(404).json({
        errorCode: 404,
        errorMessage: 'Portfolio not found'
      });
    }

    res.status(200).json({
      message: 'Portfolio retrieved successfully',
      data: portfolio
    });
  } catch (error) {
    next(error);
  }
};


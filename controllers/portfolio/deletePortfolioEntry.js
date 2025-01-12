import Portfolio from '../../models/Portfolio.js';

export const deletePortfolioEntry = async (req, res, next) => {
  try {
    const { crypto } = req.params;
    const userId = req.user._id;

    const portfolio = await Portfolio.findOne({ user: userId });

    if (!portfolio) {
      return res.status(404).json({
        errorCode: 404,
        errorMessage: 'Portfolio not found'
      });
    }

    portfolio.holdings = portfolio.holdings.filter(
      (holding) => holding.crypto.toLowerCase() !== crypto.toLowerCase()
    );

    await portfolio.save();
    res.status(200).json({
      message: 'Portfolio entry deleted successfully',
      data: portfolio
    });
  } catch (error) {
    next(error);
  }
};


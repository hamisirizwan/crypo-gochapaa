import Portfolio from '../../models/Portfolio.js';
import { validatePortfolioInput } from '../../utils/validation.js';

export const updatePortfolioEntry = async (req, res, next) => {
  try {
    const { crypto } = req.params;
    const userId = req.user._id;
    const { buyingPrice, quantity } = req.body;
    validatePortfolioInput({ buyingPrice, quantity });

    const portfolio = await Portfolio.findOne({ user: userId });

    if (!portfolio) {
      return res.status(404).json({
        errorCode: 404,
        errorMessage: 'Portfolio not found'
      });
    }

    const holdingIndex = portfolio.holdings.findIndex(
      (holding) => holding.crypto.toLowerCase() === crypto.toLowerCase()
    );

    if (holdingIndex === -1) {
      return res.status(404).json({
        errorCode: 404,
        errorMessage: 'Cryptocurrency not found in portfolio'
      });
    }

    portfolio.holdings[holdingIndex].buyingPrice = buyingPrice;
    portfolio.holdings[holdingIndex].quantity = quantity;

    await portfolio.save();
    res.status(200).json({
      message: 'Portfolio entry updated successfully',
      data: portfolio
    });
  } catch (error) {
    next(error);
  }
};


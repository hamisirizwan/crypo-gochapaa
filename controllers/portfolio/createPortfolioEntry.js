import Portfolio from '../../models/Portfolio.js';
import { validatePortfolioInput } from '../../utils/validation.js';

export const createPortfolioEntry = async (req, res, next) => {
  try {
    const { crypto, buyingPrice, quantity } = req.body;
    const userId = req.user._id;
    validatePortfolioInput(req.body);

    let portfolio = await Portfolio.findOne({ user: userId });

    if (!portfolio) {
      portfolio = new Portfolio({ user: userId, holdings: [] });
    }

    portfolio.holdings.push({ crypto, buyingPrice, quantity });
    await portfolio.save();

    res.status(201).json({
      message: 'Portfolio entry created successfully',
      data: portfolio
    });
  } catch (error) {
    next(error);
  }
};


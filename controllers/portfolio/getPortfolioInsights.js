import Portfolio from '../../models/Portfolio.js';
import { getCryptoPrice } from '../../services/cryptoService.js';

export const getPortfolioInsights = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const portfolio = await Portfolio.findOne({ user: userId });

    if (!portfolio) {
      return res.status(404).json({
        errorCode: 404,
        errorMessage: 'Portfolio not found'
      });
    }

    let totalValue = 0;
    let totalInvestment = 0;

    for (const holding of portfolio.holdings) {
      const currentPrice = await getCryptoPrice(holding.crypto);
      totalValue += currentPrice * holding.quantity;
      totalInvestment += holding.buyingPrice * holding.quantity;
    }

    const percentageGrowth = ((totalValue - totalInvestment) / totalInvestment) * 100;

    res.status(200).json({
      message: 'Portfolio insights retrieved successfully',
      data: {
        totalValue,
        totalInvestment,
        percentageGrowth
      }
    });
  } catch (error) {
    next(error);
  }
};


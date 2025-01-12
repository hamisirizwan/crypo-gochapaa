import { fetchTop10Cryptocurrencies } from '../../services/cryptoService.js';

export const getTop10Cryptocurrencies = async (req, res, next) => {
  try {
    const cryptocurrencies = await fetchTop10Cryptocurrencies();
    res.status(200).json({
      message: 'Top 10 cryptocurrencies retrieved successfully',
      data: cryptocurrencies
    });
  } catch (error) {
    next(error);
  }
};


import { getCryptoPrice } from '../../services/cryptoService.js';

export const getCryptocurrencyPrice = async (req, res, next) => {
  try {
    const { symbol } = req.params;
    const price = await getCryptoPrice(symbol);
    res.status(200).json({
      message: 'Cryptocurrency price retrieved successfully',
      data: { symbol, price }
    });
  } catch (error) {
    next(error);
  }
};


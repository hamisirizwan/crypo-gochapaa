import axios from 'axios';
import Crypto from '../models/Crypto.js';
import { redisClient } from '../utils/redisConnect.js';

export const fetchTop10Cryptocurrencies = async () => {
  const cacheKey = 'top10Cryptocurrencies';
  const cachedData = await redisClient.get(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 10,
          page: 1,
          sparkline: false,
        },
      }
    );

    const cryptocurrencies = response.data.map((crypto) => ({
      symbol: crypto.symbol,
      name: crypto.name,
      price: crypto.current_price,
      marketCap: crypto.market_cap,
      timestamp: new Date(),
    }));

    await Crypto.insertMany(cryptocurrencies);

    await redisClient.set(cacheKey, JSON.stringify(cryptocurrencies), 'EX', 300); // Cache for 5 minutes
    return cryptocurrencies;
  } catch (error) {
    console.error('Error fetching cryptocurrency data:', error);
    throw new Error('Failed to fetch cryptocurrency data');
  }
};

export const getCryptoPrice = async (symbol) => {
  const cacheKey = `cryptoPrice_${symbol}`;
  const cachedPrice = await redisClient.get(cacheKey);

  if (cachedPrice) {
    return parseFloat(cachedPrice);
  }

  try {
    const crypto = await Crypto.findOne({ symbol: symbol.toLowerCase() })
      .sort({ timestamp: -1 })
      .limit(1);

    if (!crypto) {
      throw new Error('Cryptocurrency not found');
    }

    await redisClient.set(cacheKey, crypto.price.toString(), 'EX', 300); // Cache for 5 minutes
    return crypto.price;
  } catch (error) {
    console.error('Error fetching cryptocurrency price:', error);
    throw new Error('Failed to fetch cryptocurrency price');
  }
};


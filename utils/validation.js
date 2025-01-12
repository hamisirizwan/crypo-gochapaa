export const validatePortfolioInput = (input) => {
    const { crypto, buyingPrice, quantity } = input;
  
    if (!crypto || typeof crypto !== 'string') {
      throw new Error('Crypto symbol must be a non-empty string');
    }
  
    if (buyingPrice !== undefined && (isNaN(buyingPrice) || buyingPrice < 0)) {
      throw new Error('Buying price must be a non-negative number');
    }
  
    if (quantity !== undefined && (isNaN(quantity) || quantity < 0)) {
      throw new Error('Quantity must be a non-negative number');
    }
  };
  
  
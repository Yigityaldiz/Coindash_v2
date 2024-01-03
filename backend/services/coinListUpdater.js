const axios = require('axios');
const CoinList = require('../models/CoinListModel'); // coinlistSchema'ya uygun model

const updateCoinListDataInDatabase = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C30d&locale=en');
    const coinsList = response.data;
    
   
    for (const coin of coinsList) {
      const updateData = {
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        image: coin.image,
        currentPrice: coin.current_price,
        marketCap: coin.market_cap,
        marketCapRank: coin.market_cap_rank,
        fullyDilutedValuation: coin.fully_diluted_valuation,
        totalVolume: coin.total_volume,
        high24h: coin.high_24h,
        low24h: coin.low_24h,
        priceChange24h: coin.price_change_24h,
        priceChangePercentage24h: coin.price_change_percentage_24h,
        marketCapChange24h: coin.market_cap_change_24h,
        marketCapChangePercentage24h: coin.market_cap_change_percentage_24h,
        circulatingSupply: coin.circulating_supply,
        totalSupply: coin.total_supply,
        maxSupply: coin.max_supply,
        ath: coin.ath,
        athChangePercentage: coin.ath_change_percentage,
        athDate: coin.ath_date,
        atl: coin.atl,
        atlChangePercentage: coin.atl_change_percentage,
        atlDate: coin.atl_date,
        roi: null,
        lastUpdated: coin.last_updated,
        priceChangePercentage1hInCurrency: coin.price_change_percentage_1h_in_currency,
        priceChangePercentage24hInCurrency: coin.price_change_percentage_24h_in_currency,
        priceChangePercentage30dInCurrency: coin.price_change_percentage_30d_in_currency,

      };

      await CoinList.findOneAndUpdate({ id: coin.id }, updateData, { upsert: true });
    }

    return { success: true };
  } catch (error) {
    console.error('Error updating coinsList data:', error);
    throw error;
  }
};

module.exports = { updateCoinListDataInDatabase };






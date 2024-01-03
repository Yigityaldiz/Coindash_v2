const axios = require('axios');
const TrendModel = require('../models/TrendModel');

const updateTrendsDataInDatabase = async () => {
  try {
    // API Verilerini Alma

    const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');


    const trendingData = response.data.coins
    
   
    

    // Trend Verilerini Döngü ile İşleme
    const updatedTrends = [];
    for (const coin of trendingData) {
      // Trend'in var olup olmadığını kontrol et
      const trendExists = await TrendModel.exists({ id: coin.item.id });

      // Trend varsa, güncelle
      if (trendExists) {
        await delay(20 * 1000);
        const updatedTrend = await TrendModel.findOneAndUpdate({ id: coin.item.id }, {
          $set: {
            id: coin.item.id,
            coin_id: coin.item.coin_id,
            name: coin.item.name,
            symbol: coin.item.symbol,
            market_cap_rank: coin.item.market_cap_rank,
            thumb: coin.item.thumb,
            small: coin.item.small,
            large: coin.item.large,
            slug: coin.item.slug,
            price_btc: coin.item.price_btc,
            score: coin.item.score,
            data: {
              price: coin.item.data.price,
              price_btc: coin.item.data.price_btc,
              price_change_percentage_24h: {
                usd: coin.item.data.price_change_percentage_24h.usd,
                // Diğer para birimleri buraya eklenir...
              },
              market_cap: coin.item.data.market_cap,
              market_cap_btc: coin.item.data.market_cap_btc,
              total_volume: coin.item.data.total_volume,
              total_volume_btc: coin.item.data.total_volume_btc,
              sparkline: coin.item.data.sparkline,
              content: coin.item.data.content,
            },
          },
        });

        updatedTrends.push(updatedTrend);
      } else {
        // Trend yoksa, ekle
        const newTrend = new TrendModel({
          id: coin.item.id,
          coin_id: coin.item.coin_id,
          name: coin.item.name,
          symbol: coin.item.symbol,
          market_cap_rank: coin.item.market_cap_rank,
          thumb: coin.item.thumb,
          small: coin.item.small,
          large: coin.item.large,
          slug: coin.item.slug,
          price_btc: coin.item.price_btc,
          score: coin.item.score,
          data: {
            price: coin.item.data.price,
            price_btc: coin.item.data.price_btc,
            price_change_percentage_24h: {
              usd: coin.item.data.price_change_percentage_24h.usd,
              // Diğer para birimleri buraya eklenir...
            },
            market_cap: coin.item.data.market_cap,
            market_cap_btc: coin.item.data.market_cap_btc,
            total_volume: coin.item.data.total_volume,
            total_volume_btc: coin.item.data.total_volume_btc,
            sparkline: coin.item.data.sparkline,
            content: coin.item.data.content,
          },
        });

        await newTrend.save();
        updatedTrends.push(newTrend);
      }
    }

    // Güncelleme Tamamlama
    console.log("Trends data update completed");
    return { success: true, updatedTrends };
  } catch (error) {
    console.error('Error updating trends data:', error);
    throw error;
  }
};
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

module.exports = { updateTrendsDataInDatabase };
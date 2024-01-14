const axios = require('axios');
const TrendModel = require('../models/TrendModel');
const TrendNftModel = require('../models/TrendNftModel')

const updateTrendsDataInDatabase = async () => {
  try {
    // API Verilerini Alma

    const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');


    const trendingData = response.data.coins
    const trendingNftData = response.data.nfts
    
    
   
    

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

    const updatedTrendNfts = [];
    for (const nft of trendingNftData) {
      const trendNftExists = await TrendNftModel.exists({ id: nft.id });
    
      if (trendNftExists) {
        // Varolan NFT Trendini Güncelle
        const updatedTrendNft = await TrendNftModel.findOneAndUpdate({ id: nft.id }, {
          $set: {
            nftContractId: nft.nft_contract_id,
            name: nft.name,
            symbol: nft.symbol,
            thumb: nft.thumb,
            nativeCurrencySymbol: nft.native_currency_symbol,
            floorPriceInNativeCurrency: nft.floor_price_in_native_currency,
            floorPrice24hPercentageChange: nft.floor_price_24h_percentage_change,
            data: {
              floorPrice: nft.data.floor_price,
              floorPriceInUsd24hPercentageChange: nft.data.floor_price_in_usd_24h_percentage_change,
              h24Volume: nft.data.h24_volume,
              h24AverageSalePrice: nft.data.h24_average_sale_price,
              sparkline: nft.data.sparkline,
              content: nft.data.content
            },
          },
        }, { new: true });
    
        updatedTrendNfts.push(updatedTrendNft);
      } else {
        // Yeni NFT Trendi Ekle
        const newTrendNft = new TrendNftModel({
          id: nft.id,
          nftContractId: nft.nft_contract_id,
            name: nft.name,
            symbol: nft.symbol,
            thumb: nft.thumb,
            nativeCurrencySymbol: nft.native_currency_symbol,
            floorPriceInNativeCurrency: nft.floor_price_in_native_currency,
            floorPrice24hPercentageChange: nft.floor_price_24h_percentage_change,
            data: {
              floorPrice: nft.data.floor_price,
              floorPriceInUsd24hPercentageChange: nft.data.floor_price_in_usd_24h_percentage_change,
              h24Volume: nft.data.h24_volume,
              h24AverageSalePrice: nft.data.h24_average_sale_price,
              sparkline: nft.data.sparkline,
              content: nft.data.content
          },
        });
    
        await newTrendNft.save();
        updatedTrendNfts.push(newTrendNft);
        console.log("nft datasi pushlandi", newTrendNft)
      }
    }

    // Güncelleme Tamamlama
    console.log("Trends data update completed",trendingNftData);
    return { success: true, updatedTrends };
  } catch (error) {
    console.error('Error updating trends data:', error);
    throw error;
  }
};
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

module.exports = { updateTrendsDataInDatabase };
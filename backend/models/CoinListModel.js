const mongoose = require('mongoose');

const coinListSchema = new mongoose.Schema({
  
  id: String,
  symbol: String,
  name: String,
  image: String,
  currentPrice: Number,
  marketCap: Number,
  marketCapRank: Number,
  fullyDilutedValuation: Number,
  totalVolume: Number,
  high24h: Number,
  low24h: Number,
  priceChange24h: Number,
  priceChangePercentage24h: Number,
  marketCapChange24h: Number,
  marketCapChangePercentage24h: Number,
  circulatingSupply: Number,
  totalSupply: Number,
  maxSupply: Number,
  ath: Number,
  athChangePercentage: Number,
  athDate: Date,
  atl: Number,
  atlChangePercentage: Number,
  atlDate: Date,
  roi: {
    type: {
      times: Number,
      currency: String,
      percentage: Number,
    }, } ,
  lastUpdated: Date,
  priceChangePercentage1hInCurrency: Number,
  priceChangePercentage24hInCurrency: Number,
  priceChangePercentage30dInCurrency: Number,
});

const CoinListModel = mongoose.model('CoinList', coinListSchema);

module.exports = CoinListModel;

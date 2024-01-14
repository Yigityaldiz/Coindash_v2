const mongoose = require('mongoose');

const { Schema } = mongoose;

const trendNftSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  nftContractId: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  thumb: {
    type: String,
    required: true,
  },
  nativeCurrencySymbol: {
    type: String,
    required: true,
  },
  floorPriceInNativeCurrency: {
    type: Number,
    required: true,
  },
  floorPrice24hPercentageChange: {
    type: Number,
    required: true,
  },
  data: {
    floorPrice: String,
    floorPriceInUsd24hPercentageChange: String,
    h24Volume: String,
    h24AverageSalePrice: String,
    sparkline: String,
    content: Object, // Bu alan içerik tipine bağlı olarak değişebilir
  },
});

const TrendNftModel = mongoose.model('TrendNft', trendNftSchema);

module.exports = TrendNftModel;

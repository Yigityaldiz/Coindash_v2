const mongoose = require('mongoose');

const { Schema } = mongoose;

const trendSchema = new Schema({
   
  id:{
    type : String,
    require : true,
  },

  coin_id: {
    type: Number,
    required: true,
    
  },
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  market_cap_rank: {
    type: Number,
    required: true,
  },
  thumb: {
    type: String,
    required: true,
  },
  small: {
    type: String,
    required: true,
  },
  large: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  price_btc: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  data: {
    price: String,
    price_btc: String,
    price_change_percentage_24h: {
      usd: Number,
      // Diğer para birimleri buraya eklenir...
    },
    market_cap: String,
    market_cap_btc: String,
    total_volume: String,
    total_volume_btc: String,
    sparkline: String,
    content: Object,
  },
});

const TrendModel = mongoose.model('Trend', trendSchema);

module.exports = TrendModel;

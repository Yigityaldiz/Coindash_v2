const mongoose = require("mongoose");



const coinSchema = new mongoose.Schema({
    coinId: { type: String, required: true },
    marketChartData: { type: Object, required: true },
    symbol: { type: String, required: false },  
    name: { type: String, required: false },    
});

const CoinModel = mongoose.model("Coin", coinSchema);

module.exports = CoinModel; 
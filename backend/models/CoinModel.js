const mongoose = require("mongoose");



const coinSchema = new mongoose.Schema({
    coinId: { type: String, required: true },
    marketChartData: { type: Object, required: true },
    symbol: { type: String, required: false },  // Bu alanı ekleyin
    name: { type: String, required: false },    // Bu alanı ekleyin
});

const CoinModel = mongoose.model("Coin", coinSchema);

module.exports = CoinModel; 
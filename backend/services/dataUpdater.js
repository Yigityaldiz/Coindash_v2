const axios = require('axios');
const CoinModel = require('../models/CoinModel');

const updateCoinsDataInDatabase = async () => {
    try {
        // İlk 200 coinin listesini Coingecko API'den al
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 200,
                page: 1,
                sparkline: false,
            },
        });

        const coinsList = response.data;
        

        // Her bir coin için veritabanına belge ekle
        for (const coin of coinsList) {
            try {
                // Coin verisinin güncellenmesini sağla

                const existingCoin = await CoinModel.findOne({ coinId: coin.id });

                if (existingCoin) {
                    // Coin verisi zaten varsa, güncelle
                    await delay(20 * 1000);
                    const coinData = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart`, {
                        params: {
                            vs_currency: 'usd',
                            days: 365, // 1 yıl
                        },
                    });

                    await CoinModel.updateOne({ coinId: coin.id }, {
                        $set: {
                            
                            marketChartData: coinData.data,
                            symbol: coin.symbol || "",
                            name: coin.name || "",
                        }
                    });

                    console.log(`Data for coin ${coin.id} updated in MongoDB`);
                } else {
                    // Coin verisi yoksa, yeni belge ekle
                    await delay(20 * 1000);
                    const coinData = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart`, {
                        params: {
                            vs_currency: 'usd',
                            days: 365, // 1 yıl
                        },
                    });

                    const newCoin = new CoinModel({
                        coinId: coin.id,
                        marketChartData: coinData.data,
                        symbol: coin.symbol || "",
                        name: coin.name || "",
                    });

                    await newCoin.save();
                    console.log(`Data for coin ${coin.id} added to MongoDB`);
                }
                // Her bir coin için 1 dakika beklet

            } catch (updateError) {
                console.error(`Error updating data for coin ${coin.id}:`, updateError);
            }
        }

        console.log("Coins data update completed");

        return { success: true };
    } catch (error) {
        console.error('Error updating coins data:', error);
        throw error;
    }
};



// Belirli bir süre beklemeyi sağlayan fonksiyon


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// İlk kez çalıştır
module.exports = { updateCoinsDataInDatabase };



const axios = require("axios");

async function getBitcoinDataForLastYear() {
    try {
        // Şu anki tarih
        const currentDate = new Date();

        // Bir yıl önceki tarih
        const lastYearDate = new Date();
        lastYearDate.setFullYear(currentDate.getFullYear() - 1);

        // Tarihleri UNIX zamanına çevirme (milisaniye cinsinden)
        const fromDate = Math.floor(lastYearDate.getTime() / 1000);
        const toDate = Math.floor(currentDate.getTime() / 1000);

        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range`,
            {
                params: {
                    vs_currency: 'usd',
                    from: fromDate,
                    to: toDate,
                },
            }
        );

        const bitcoinData = response.data;
        console.log(bitcoinData);
    } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
    }
}


module.exports = getBitcoinDataForLastYear;;

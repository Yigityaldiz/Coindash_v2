const axios = require('axios');
const TaskModel = require('../models/TaskModel');

const updateOrCreateBitcoinDataInDatabase = async () => {
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

        // Mevcut kaydı bul
        const existingTask = await TaskModel.findOne();

        if (existingTask) {
            // Mevcut kaydı güncelle
            existingTask.bitcoinData = bitcoinData;
        } else {
            // Eğer kayıt yoksa yeni bir kayıt oluştur
            const task = new TaskModel({ bitcoinData });
            await task.save();
        }

        console.log("Save or update data in MongoDB");

        return { success: true };
    } catch (error) {
        console.error('Error updating or saving data:', error);
        throw error;
    }
};

module.exports = { updateOrCreateBitcoinDataInDatabase };

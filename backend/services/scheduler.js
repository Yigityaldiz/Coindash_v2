const cron = require('node-cron');
const dataUpdater = require('./dataUpdater');

const start = () => {
    // Belirli aralıklarla veri güncelleme görevi
    cron.schedule('0 0 4 * *', async () => {
        // Her 30 dakikada bir güncelleme işlemi yapılacak
        await dataUpdater.updateCoinsDataInDatabase();
    });
};

module.exports = { start };
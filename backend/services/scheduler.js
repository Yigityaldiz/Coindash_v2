const cron = require('node-cron');
const dataUpdater = require('./dataUpdater').default;

// Belirli aralıklarla veri güncelleme görevi
cron.schedule('*/30 * * * *', async () => {
    // Her 30 dakikada bir güncelleme işlemi yapılacak
    await dataUpdater.getBitcoinDataForLastYear();
});
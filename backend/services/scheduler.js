const cron = require('node-cron');
const dataUpdater = require('./dataUpdater');
const coinListUpdater = require('./coinListUpdater');

const start = () => {
   
    cron.schedule('0 0 4 * *', async () => {
        // Her 30 dakikada bir güncelleme işlemi yapılacak
        await dataUpdater.updateCoinsDataInDatabase();
    });

    cron.schedule('* * * * *', async () => {
        console.log("anlik veri guncellendi");
        
        await coinListUpdater.updateCoinListDataInDatabase();
    });
};

module.exports = { start };
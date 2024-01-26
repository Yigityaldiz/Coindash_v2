const cron = require('node-cron');
const dataUpdater = require('./dataUpdater');
const coinListUpdater = require('./coinListUpdater');
const trendUpdater = require('./trendUpdater')

const start = () => {
   
    cron.schedule('0 0 4 * *', async () => {
        // Her 30 dakikada bir güncelleme işlemi yapılacak
        await dataUpdater.updateCoinsDataInDatabase();
    });

    cron.schedule('* * * * *', async () => {
        console.log("anlik veri guncellendi");
        
        await coinListUpdater.updateCoinListDataInDatabase();
    });

    cron.schedule('* * * * *', async () => {
      
        
        await trendUpdater.updateTrendsDataInDatabase();
    });
};

module.exports = { start };
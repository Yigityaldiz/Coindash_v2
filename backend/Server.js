const express = require("express");
const mongoose = require("mongoose");
const scheduler = require('./services/scheduler'); // scheduler modülünü import et
const dataUpdater = require('./services/dataUpdater');

const apiRouter = require('./routes/api'); // routes klasörünüzün doğru yolunu belirttiğinizden emin olun
const coinListUpdater = require('./services/coinListUpdater')
const trendUpdater = require('./services/trendUpdater')
require("dotenv").config();

const cors = require("cors");



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://129.159.150.33'
}));

//mongoose.connect(process.env.MONGO_URI)
   // .then(() => console.log("Mongo is active"))
   // .catch((err) => console.log("MongoDb connect problem ", err)); 

          mongoose.connect("mongodb://localhost:27017/coindatabase", {
        useNewUrlParser: true,
          useUnifiedTopology: true,
        })
            .then(() => console.log("Mongo is active"))
            .catch((err) => console.log("MongoDb connect problem ", err)); 



app.use('/api', apiRouter);
// Zamanlanmış görevi başlatma
scheduler.start(); // scheduler fonksiyonunu başlat

// dataUpdater.updateCoinsDataInDatabase() ; 

trendUpdater.updateTrendsDataInDatabase() ;

// coinListUpdater.updateCoinListDataInDatabase();


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


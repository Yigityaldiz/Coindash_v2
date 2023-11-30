const express = require("express");
const mongoose = require("mongoose");
const scheduler = require('./services/scheduler'); // scheduler modülünü import et
const getBitcoinDataForLastYear = require('./services/dataUpdater');
const TaskModel = require('./models/TaskModel'); // Model yolunuza göre güncelleyin
const apiRouter = require('./routes/api'); // routes klasörünüzün doğru yolunu belirttiğinizden emin olun
require("dotenv").config();

const cors = require("cors");
const router = require("./routes/TaskRoute");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongo is active"))
    .catch((err) => console.log("MongoDb connect problem ", err));

// Remove the useRouter function, it's not needed.
// Use the router directly
app.use("/", router);
app.use('/api', apiRouter);
// Zamanlanmış görevi başlatma
scheduler.start(); // scheduler fonksiyonunu başlat

// Bitcoin verilerini çekme ve MongoDB'ye kaydetme endpoint'i


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

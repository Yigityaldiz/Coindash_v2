const express = require("express");
const mongoose = require("mongoose");
const scheduler = require('./services/scheduler');
const getBitcoinDataForLastYear = require('./services/dataUpdater'); // dataUpdater modülünü import et
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

// Zamanlanmış görevi başlatma
scheduler;

// Bitcoin verilerini çekme endpoint'i
app.get('/bitcoin-data', async (req, res) => {
    try {
        const bitcoinData = await getBitcoinDataForLastYear();
        res.json(bitcoinData);
    } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

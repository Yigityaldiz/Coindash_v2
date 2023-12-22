// routes/api.js
const express = require('express');
const router = express.Router();
const TaskModel = require('../models/TaskModel');
const CoinModel = require('../models/CoinModel');

// Örnek: Bitcoin verilerini getiren endpoint
router.get('/bitcoin-data', async (req, res) => {
    try {
        const bitcoinData = await TaskModel.find();
        res.json(bitcoinData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/coins', async(req,res)=>{
    try{
        const coinData = await CoinModel.find();
        res.json(coinData);
    } catch(error) {
        console.error("Error fetching data:", error);
    }
})

module.exports = router;

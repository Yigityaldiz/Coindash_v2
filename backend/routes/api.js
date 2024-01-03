// routes/api.js
const express = require('express');
const router = express.Router();
const TaskModel = require('../models/TaskModel');
const CoinModel = require('../models/CoinModel');
const CoinListModel = require('../models/CoinListModel');
const TrendModel = require('../models/TrendModel');

const TrendController = require('../controllers/TrendControllers'); // TrendControllers.js dosyasının yolunu kontrol et

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
        console.error("Error CoinModel fetching data:", error);
    }
})

router.get('/coinList', async(req,res)=>{
    try{
        const coinData = await CoinListModel.find();
        res.json(coinData);
    } catch(error) {
        console.error("Error CoinListModel fetching data:", error);
    }
})

router.get('/trend', async(req,res)=>{
    try {
         const trend = await TrendModel.find();
        res.json(trend);
      } catch (error) {
        console.error("Error TrendModel fetching data:", error);
      }
})

module.exports = router;

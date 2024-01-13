// routes/api.js
const express = require('express');
const router = express.Router();

const CoinModel = require('../models/CoinModel');
const CoinListModel = require('../models/CoinListModel');
const TrendModel = require('../models/TrendModel');
const TrendNftModel = require('../models/TrendNftModel');



// Örnek: Bitcoin verilerini getiren endpoint


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

router.get('/trendCoin', async(req,res)=>{
    try {
         const trend = await TrendModel.find();
        res.json(trend);
      } catch (error) {
        console.error("Error TrendModel fetching data:", error);
      }
})

router.get('/trendNft',async(req,res)=>{
    try{
        const trendNft = await TrendNftModel.find();
        res.json(trendNft);
    } catch(error){
        console.error("Error trendNft fetcging data:", error  );
    }
})

module.exports = router;

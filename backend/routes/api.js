// routes/api.js
const express = require('express');
const router = express.Router();
const TaskModel = require('../models/TaskModel');

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

module.exports = router;

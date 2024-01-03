const TrendModel = require('../models/TrendModel'); // TrendModel.js model dosyanızın yolu

// Tüm trend verilerini getir
const getAllTrends = async (req, res) => {
  try {
    const trends = await TrendModel.find();
    res.json(trends);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Belirli bir trendin detaylarını getir
const getTrendDetails = async (req, res) => {
  try {
    const trend = await TrendModel.findOne({ id: req.params.id });
    if (!trend) {
      return res.status(404).json({ message: 'Trend bulunamadı' });
    }
    res.json(trend);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Yeni trend ekle
const addTrend = async (req, res) => {
  const trend = new TrendModel({
    id: req.body.id,
    coin_id: req.body.coin_id,
    name: req.body.name,
    // Diğer özellikleri buraya ekleyin
  });

  try {
    const newTrend = await trend.save();
    res.status(201).json(newTrend);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Trend güncelle
const updateTrend = async (req, res) => {
  try {
    const updatedTrend = await TrendModel.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(updatedTrend);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Trend sil
const deleteTrend = async (req, res) => {
  try {
    await TrendModel.findOneAndDelete({ id: req.params.id });
    res.json({ message: 'Trend başarıyla silindi' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTrends,
  getTrendDetails,
  addTrend,
  updateTrend,
  deleteTrend,
};

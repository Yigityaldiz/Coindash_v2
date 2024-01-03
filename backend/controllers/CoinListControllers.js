const CoinList = require('../models/coinlist'); // coinlist.js model dosyanızın yolu

// Tüm coinleri getir
const getAllCoins = async (req, res) => {
  try {
    const coins = await CoinList.find();
    res.json(coins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Belirli bir coinin detaylarını getir
const getCoinDetails = async (req, res) => {
  try {
    const coin = await CoinList.findOne({ id: req.params.id });
    if (!coin) {
      return res.status(404).json({ message: 'Coin bulunamadı' });
    }
    res.json(coin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Yeni coin ekle
const addCoin = async (req, res) => {
  const coin = new CoinList({
    id: req.body.id,
    symbol: req.body.symbol,
    name: req.body.name,
    // Diğer özellikleri buraya ekleyin
  });

  try {
    const newCoin = await coin.save();
    res.status(201).json(newCoin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Coin güncelle
const updateCoin = async (req, res) => {
  try {
    const updatedCoin = await CoinList.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(updatedCoin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Coin sil
const deleteCoin = async (req, res) => {
  try {
    await CoinList.findOneAndDelete({ id: req.params.id });
    res.json({ message: 'Coin başarıyla silindi' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCoins,
  getCoinDetails,
  addCoin,
  updateCoin,
  deleteCoin,
};

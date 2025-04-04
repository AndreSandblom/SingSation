const express = require('express');
const axios = require('axios');
const router = express.Router();

//GET /api/lyrics/:artist/:title
router.get('/lyrics/:artist/:title', async (req, res) => {
  const { artist, title } = req.params;
  console.log(`🎯 HIT: ${req.params.artist} - ${req.params.title}`);
  try {
    const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
    console.log('Lyrics response:', response.data);
    res.json({ lyrics: response.data.lyrics });
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ error: 'Lyrics not found' });
  }
});

module.exports = router;

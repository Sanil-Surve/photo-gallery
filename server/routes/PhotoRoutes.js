const express = require('express');
const Photo = require('../models/Photo');
const upload = require('../config/multer');
const sendToKafka = require('../config/kafkaProducer');

const router = express.Router();

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { title } = req.body;
    const newPhoto = new Photo({ url: req.file.path, title });
    await newPhoto.save();
    sendToKafka({ url: req.file.path, title });

    res.status(201).json(newPhoto);
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload photo' });
  }
});

router.get('/photos', async (req, res) => {
  try {
    const photos = await Photo.find();
    res.status(200).json(photos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
});

module.exports = router;
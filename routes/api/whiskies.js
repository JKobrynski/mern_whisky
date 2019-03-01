const express = require('express');
const router = express.Router();

//Whisky model
const Whisky = require('../../models/whisky');

// Get all items
router.get('/', (req, res) => {
  Whisky.find()
    .sort({ date: -1 })
    .then(whiskies => res.json(whiskies))
});

// Create an item
router.post('/', (req, res) => {
  const newWhisky = new Whisky({
    name: req.body.name,
    age: req.body.age,
    country: req.body.country,
    description: req.body.description
  });

  newWhisky.save().then(whisky => res.json(whisky));
});

// Delete an item
router.delete('/:id', (req, res) => {
  Whisky.findById(req.params.id).then(whisky => 
    whisky.remove().then(() => res.json({success: true}))
  )
  .catch(err => res.status(404).json({success: false}));
});

module.exports = router;
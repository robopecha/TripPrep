const express = require('express');
const router = express.Router();
const Trip = require("../models/Trip.model");

router.get('/trips', async (req, res) => {
  const searchQuery = req.query.q;

  try {
    let trips = await Trip.find();

    if (searchQuery) {
      trips = trips.filter((trip) => {
        return (
          trip.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
          trip.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          trip.season.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    }

    res.json(trips);
  } catch (error) {
    console.error('Error fetching trips:', error);
    res.status(500).json({ error: 'Failed to fetch trips.' });
  }
});

module.exports = router;

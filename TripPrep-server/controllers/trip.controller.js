const router = require('express').Router();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;
const axios = require("axios");
const Trip = require("../models/Trip.model");
const List = require("../models/List.model");


const postNewTrip = (req, res, next) => {
  const { destination, country, season, startDate, userID } = req.body;

  Trip.create({ destination, country, season, startDate, lists: [], user: userID })
  .then((createdTrip) => {
    List.create({
      toDo: [],
      toBuy: [],
      toPack: [],
      trip: createdTrip._id
    })

  .then((createdList) => {
    console.log("createdList", createdList);
    console.log("created trip", createdTrip);
    createdTrip.lists.push(createdList);
    return createdTrip.save();
  })
})

    .catch((err) => res.json(err));
};

const getAllTrips = (req, res, next) => {
  Trip.find()
    .populate("lists")
    .then((allTrips) => res.json(allTrips))
    .catch((err) => res.json(err));
};

const getOneTrip = (req, res, next) => {
  const { tripId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(tripId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Trip.findById(tripId)
    .populate("lists")
    .then((trip) => res.status(200).json(trip))
    .catch((error) => res.json(error));
};

const editTrip = (req, res, next) => {
  const { tripId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(tripId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Trip.findByIdAndUpdate(tripId, req.body, { new: true })
    .then((updatedTrip) => res.json(updatedTrip))
    .catch((error) => res.json(error));
};

const deleteTrip = (req, res, next) => {
  const { tripId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(tripId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Trip.findByIdAndRemove(tripId)
    .then(() =>
      res.json({
        message: `Trip with ${tripId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
};


module.exports = { postNewTrip, getAllTrips, getOneTrip, editTrip, deleteTrip };

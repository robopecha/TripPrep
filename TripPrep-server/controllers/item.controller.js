const router = require('express').Router();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;
const axios = require("axios");
const Item = require("../models/Item.model");
const List = require("../models/List.model");
const Trip = require("../models/Trip.model");


const postNewItem = (req, res, next) => {
  const { content, tripID, listType } = req.body;

  Item.create({ content, trip: tripID, listType })
    .then((createdItem) => {
      List.findOne({ trip: tripID })
        .then((list) => {
          list[listType].push(createdItem._id);
          list.save();
          res.send("Hello World");
        })
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
};


const getAllItems = (req, res, next) => {
  Item.find()
    .then((allItems) => res.json(allItems))
    .catch((err) => res.json(err));
};


const getOneItem = (req, res, next) => {
  const { itemId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(itemId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Item.findById(itemId)
    .then((item) => res.status(200).json(item))
    .catch((error) => res.json(error));
};


const editItem = (req, res, next) => {
  const { itemId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(itemId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Item.findByIdAndUpdate(itemId, req.body, { new: true })
    .then((updatedItem) => res.json(updatedItem))
    .catch((error) => res.json(error));
};


const deleteItem = (req, res, next) => {
  const { itemId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(itemId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Item.findByIdAndRemove(itemId)
    .then(() =>
      res.json({
        message: `Item with ${itemId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
};


module.exports = { postNewItem, getAllItems, getOneItem, editItem, deleteItem };

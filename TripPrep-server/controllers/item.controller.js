const router = require('express').Router();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;
const axios = require("axios");
const Item = require("../models/Item.model");
const List = require("../models/List.model");


const postNewItem = (req, res, next) => {
  const { content } = req.body;

  Item.create({ content, list })               // add list_id
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

const getAllItems = (req, res, next) => {
  Item.find()
    .then((allItems) => res.json(allItems))
    .catch((err) => res.json(err));
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


module.exports = { postNewItem, getAllItems, editItem, deleteItem };

const router = require('express').Router();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;
const axios = require("axios");
const List = require("../models/List.model");
const Item = require("../models/Item.model");


const postNewList = (req, res, next) => {              // here or in trip create?
  const { listType } = req.body;

  List.create({ listType, trip, items: [] })           // add trip_id and item_ids
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

const getAllLists = (req, res, next) => {
  List.find()
    .populate("items")
    .then((allLists) => res.json(allLists))
    .catch((err) => res.json(err));
};

const getOneList = (req, res, next) => {
  const { listId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(listId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  List.findById(listId)
    .populate("lists")
    .then((list) => res.status(200).json(list))
    .catch((error) => res.json(error));
};


module.exports = { postNewList, getAllLists, getOneList };

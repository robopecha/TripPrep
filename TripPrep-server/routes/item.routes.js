const router = require('express').Router();
const itemController = require("../controllers/item.controller");


router.post("/items", itemController.postNewItem);

router.get("/items", itemController.getAllItems);

router.put("/items/:itemId", itemController.editItem);

router.delete("/items/:itemId", itemController.deleteItem);


module.exports = router;

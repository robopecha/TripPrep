const router = require('express').Router();
const listController = require("../controllers/list.controller");


router.post("/lists", listController.postNewList);

router.get("/lists", listController.getAllLists);

router.get("/lists/:listId", listController.getOneList);


module.exports = router;

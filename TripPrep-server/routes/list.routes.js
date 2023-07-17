const router = require('express').Router();
const listController = require("../controllers/list.controller");


router.post("/lists", listController.postNewList);   // <- do i need this? does the whole path go in here?

router.get("/lists", listController.getAllLists);

router.get("/lists/:listId", listController.getOneList);


module.exports = router;

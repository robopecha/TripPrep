const router = require('express').Router();
const tripController = require("../controllers/trip.controller");


router.post("/trips", tripController.postNewTrip);

router.get("/trips", tripController.getAllTrips);

router.get("/trips/:tripId", tripController.getOneTrip);

router.put("/trips/:tripId", tripController.editTrip);

router.delete("/trips/:tripId", tripController.deleteTrip);


module.exports = router;

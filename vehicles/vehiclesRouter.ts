export {};
const express = require("express");
const db = require("./vehiclesDb");
const {
    validateVin,
    validateVehicle
} = require("../middleware/vehicles");

const router = express.Router();

//create
router.post("/",validateVehicle, async (req, res) => {
    const newVehicle = await db.createVehicle({
        //using req.body.<name> instead of just sending req.body in case req.body has something else in it
        vin: req.body.vin,
        make: req.body.make,
        year: req.body.year,
        model: req.body.model,
        mileage: req.body.mileage,
        transType: req.body.transType,
        titleStatus: req.body.titleStatus,
    });
    try {
        res.status(201).json(newVehicle);
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error creating vehicle"});
    }
});

//read
router.get("/", async (req, res) => {
    const vehicles = await db.get();
    try {
        res.status(200).json(vehicles);
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error getting vehicles"});
    }
});

router.get("/:vin", validateVin, (req, res) => {
    //todo: can get rid of try/catch since no longer async
    const vehicle = req.body.vehicle;
    try {
        res.status(200).json(vehicle);
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error getting vehicle"});
    }
});


//update


//delete


module.exports = router;
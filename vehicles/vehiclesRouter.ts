export {};
const express = require("express");
const db = require("./vehiclesDb");

const router = express.Router();

//create
router.post("/", async (req, res) => {
    const newVehicle = await db.createVehicle({
        vin: req.body.vin,
        make: req.body.make,
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


//update


//delete


module.exports = router;
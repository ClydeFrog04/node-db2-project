export {};
const db = require("../vehicles/vehiclesDb");


const validateVin = async (req, res, next) => {
    const vehicle = await db.getByVin(req.params.vin);
    try {
        if(vehicle) {
            req.body.vehicle = vehicle;
            next();
        }else res.status(400).json({message: "Invalid vin"});
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error validating vin"});
    }
}

const validateVehicle = (req, res, next) =>{
    const {vin, make, model, mileage, year} = req.body;
    if(!(vin || make || model || mileage || year)) res.status(400).json({error: "Please provide all needed vehicle information"});
    next();
}

module.exports = {
    validateVin,
    validateVehicle
}

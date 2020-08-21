export {};
const db = require("../data/dbConfig");

function get() {
    return db("vehicles");
}

function getByVin(vin) {
    return db("vehicles")
        .where("vin", vin)
        .first();
}

function createVehicle(vehicle) {
    return db("vehicles").insert(vehicle)
        .then(ids => {
            return getByVin(ids[0]);
        });
}

function updateVehicle(vin, changes) {
    return db("vehicles")
        .where("vin", vin)
        .update(changes);
}

function remove(vin) {
    const deletedVehicle = getByVin(vin);
    db("vehicles")
        .where("vin", vin)
        .delete();
    return deletedVehicle;
}

module.exports = {
    get,
    getByVin,
    createVehicle,
    updateVehicle,
    remove
}
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
    return db("vehicles").insert(vehicle).returning("id")//the returning tells postgres to return the ids array
        .then(ids => {
            return getByVin(ids[0]);
        });
}

function updateVehicle(vin, changes) {
    return db("vehicles")
        .where("vin", vin)
        .update(changes);
}

async function remove(vin) {
    const deletedVehicle = await getByVin(vin);
    await db("vehicles")
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
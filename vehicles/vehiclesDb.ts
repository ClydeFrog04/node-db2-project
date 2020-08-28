export {};
const db = require("../data/dbConfig");

async function get(vehiclesKey) {//vehicles key is the key for the cached data. In this case it is just going to be 1 for testing/learning
    const redis = require("redis");
    const redisUrl = "redis://127.0.0.1:6379";
    const client = redis.createClient(redisUrl);
    const util = require("util");
    client.get = util.promisify(client.get);

    const cachedVehicles = await client.get(vehiclesKey);

    if(cachedVehicles) {
        console.log("serving from redis");
        return JSON.parse(cachedVehicles);
    }

    console.log("serving from db");
    const vehicles = await db("vehicles");
    await client.setex(vehiclesKey, 5, JSON.stringify(vehicles));//the expiration is in seconds, not millis
    return vehicles;
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
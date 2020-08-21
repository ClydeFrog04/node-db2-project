exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("vehicles").truncate();
    await knex("vehicles").insert([
        {
            vin:1,
            make: "toyota",
            model: "4runner",
            mileage: 0,
            transType: "automatic",
            titleStatus: "clean",
            year:2020
        },
        {
            vin:2,
            make: "chevy",
            model: "silverado",
            mileage: 15,
            transType: "automatic",
            titleStatus: "clean",
            year:2015
        },
        {
            vin:3,
            make: "ford",
            model: "mustang",
            mileage: 54321,
            transType: "automatic",
            titleStatus: "clean",
            year:2000
        },
        {
            vin:4,
            make: "bugatti",
            model: "Veyron",
            mileage: 847362,
            transType: "automatic",
            titleStatus: "clean",
            year:2011
        },
    ]);
};
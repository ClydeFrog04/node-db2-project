exports.up = async function(knex) {
    await knex.schema.createTable("vehicles", tableBuilder => {
        //not nullables
        tableBuilder.increments("vin");//shorthand for table.integer("vin").notNullable().unique().primary();
        tableBuilder.text("make").notNullable();
        tableBuilder.text("model").notNullable();
        tableBuilder.integer("mileage").notNullable();
        tableBuilder.integer("year").notNullable().defaultTo(0);

        //nullables
        tableBuilder.text("transType");
        tableBuilder.text("titleStatus");
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("vehicles");
};
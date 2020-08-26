exports.up = async function(knex) {
    await knex.schema.createTable("Vehicles", tableBuilder => {
        //not nullables
        tableBuilder.increments("vin");//shorthand for table.integer("vin").notNullable().unique().primary();
        tableBuilder.text("make").notNullable();
        tableBuilder.text("model").notNullable();
        tableBuilder.integer("mileage").notNullable();

        //nullables
        tableBuilder.text("transType");
        tableBuilder.text("titleStatus");
    });
};

exports.down = function(knex) {
  
};
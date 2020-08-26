
exports.up = async function(knex) {
    await knex.schema.alterTable("vehicles", tableBuilder => {
        tableBuilder.integer("year").notNullable().defaultTo(0);
    });
};

exports.down = async function(knex) {
    await knex.schema.alterTable("vehicles", tableBuilder => {
        tableBuilder.dropColumn("year");
    });
};

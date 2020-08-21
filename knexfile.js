// Update with your config settings.

module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/dealership.db3'
        },
        useNullAsDefault: true,

        //gives a directory to generate migrations in
        migrations: {
            directory: './data/migrations'
        }
    }
}
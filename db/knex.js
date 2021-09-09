const knex = require("knex");
const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "ToDo.sqllite"
    }
});

module.exports = connectedKnex;
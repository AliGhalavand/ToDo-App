const knex = require("./knex");

function createItem(item) {
    return knex("ToDo").insert(item);
}

function getAllItems() {
    return knex("ToDo").select("*");
}

function deleteItem(id) {
    return knex("ToDo").where("id", id).del();
}

function updateItem(todoId, item) {
    return knex("ToDo").where({id: todoId}).update(item);
}

module.exports = {
    createItem,
    getAllItems,
    deleteItem,
    updateItem
}
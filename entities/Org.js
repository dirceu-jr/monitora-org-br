var EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
    name: "Org",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        }
    }
});
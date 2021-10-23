var EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
    name: "Post",
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
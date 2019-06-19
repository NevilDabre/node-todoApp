const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema =new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    name: String,
    is_completed: Boolean,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date
})

const Todo = mongoose.model('ToDo',todoSchema);

module.exports = Todo;
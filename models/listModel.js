const mongoose = require('mongoose');
const { Schema } = mongoose;

const listSchema = new Schema({
    title: String,
    obtained: Date,
    listNumber: Number,
    details: String,
    objectives: [{
        objective: String,
        isDone: Boolean
    }]
})

const List = mongoose.model("List", listSchema)
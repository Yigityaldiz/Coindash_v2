const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    bitcoinData: {
        type: Object, // veya uygun olan başka bir veri tipi
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});
const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;
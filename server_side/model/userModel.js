const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
},{timestamps: true})

const employeemodel = new mongoose.model('User', employeeSchema)
module.exports = employeemodel;
const mongoose = require('mongoose');


// Define the emergency number schema
const emergencyNumberSchema = new mongoose.Schema({
    name: String,
    number: String
});



// Create the emergency number model
const EmergencyNumber = mongoose.model('EmergencyNumber', emergencyNumberSchema);


module.exports = EmergencyNumber;
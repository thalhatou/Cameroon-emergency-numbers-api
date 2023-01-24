// Import the necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const model = require('./emergencyNumberModel')

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/emergency_numbers', { useNewUrlParser: true });

const emergencyNumberModel = model.EmergencyNumber

// Create an Express.js app
const app = express();

// Use body-parser middleware
app.use(bodyParser.json());

// API endpoint for creating an emergency number
app.post('/emergency_numbers', (req, res) => {
    const emergencyNumber = new EmergencyNumber(req.body);
    emergencyNumber.save((err, emergencyNumber) => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(emergencyNumber);
    });
});

// API endpoint for reading all emergency numbers
app.get('/emergency_numbers', (req, res) => {
    EmergencyNumber.find((err, emergencyNumbers) => {
        if (err) return res.status(500).send(err);
        return res.send(emergencyNumbers);
    });
});

// API endpoint for reading a specific emergency number
app.get('/emergency_numbers/:id', (req, res) => {
    EmergencyNumber.findById(req.params.id, (err, emergencyNumber) => {
        if (err) return res.status(500).send(err);
        if (!emergencyNumber) return res.status(404).send();
        return res.send(emergencyNumber);
    });
});

// API endpoint for updating an emergency number
app.put('/emergency_numbers/:id', (req, res) => {
    EmergencyNumber.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, emergencyNumber) => {
        if (err) return res.status(500).send(err);
        if (!emergencyNumber) return res.status(404).send();
        return res.send(emergencyNumber);
    });
});

// API endpoint for deleting an emergency number
app.delete('/emergency_numbers/:id', (req, res) => {
    EmergencyNumber.findByIdAndRemove(req.params.id, (err, emergencyNumber) => {
        if (err) return res.status(500).send(err);
        if (!emergencyNumber) return res.status(404).send();
        return res.send(emergencyNumber);
    });
});


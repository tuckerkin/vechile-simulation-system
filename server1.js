// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');

// Creating an instance of Express
const app = express();
const PORT = 3000; // Choose any available port number

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Sample data for demonstration (replace with your actual data storage mechanism)
let items = [];

// GET request to retrieve all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// POST request to create a new item
app.post('/api/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

// PUT request to update an existing item
app.put('/api/items/:id', (req, res) => {
    const id = req.params.id;
    // Logic to update item
    res.status(200).send('Item updated successfully');
});

// DELETE request to delete an item
app.delete('/api/items/:id', (req, res) => {
    const id = req.params.id;
    // Logic to delete item
    res.status(200).send('Item deleted successfully');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

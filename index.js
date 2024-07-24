const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Define a route
app.get('/api/users', (req, res) => {
  res.send('Users endpoint');
});

// Start the server
app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});


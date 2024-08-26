// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the Express app!');
});

// A sample route that returns a JSON response
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// A route with a URL parameter
app.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `You requested data for user ${userId}` });
});

// A route for handling POST requests
app.post('/api/user', (req, res) => {
  const userData = req.body;
  res.json({ message: 'User data received', data: userData });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

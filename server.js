const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Endpoint to handle GET requests
app.get('/hello', (req, res) => {
  res.status(200).send('Hello from the server!');
});

// Endpoint to handle POST requests
app.post('/log', (req, res) => {
  const data = req.body;

  // Log the received data
  console.log('Received data:', data);

  res.status(200).send('Data received successfully.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000; // Choose a port for your backend

app.use(cors());
app.use(bodyParser.json());

app.post('/email', (req, res) => {
  const userData = req.body;

  // Here you can handle the received data as needed, for example, storing it in a database.

  // For demonstration purposes, we'll just log the received data.
  console.log('Received data:', userData);

  // Respond with a success message
  res.json({ message: 'Data received successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

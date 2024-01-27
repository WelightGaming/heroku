const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/email', (req, res) => {
  const userData = req.body;

  // Log the received data to a file
  fs.appendFile('logs.txt', JSON.stringify(userData) + '\n', (err) => {
    if (err) {
      console.error('Error writing to logs.txt:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      console.log('Received data:', userData);
      res.json({ message: 'Data received successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


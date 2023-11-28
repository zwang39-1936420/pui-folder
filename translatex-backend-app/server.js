const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5001;

// Enable CORS for all routes
app.use(require('cors')());

app.get('/api/data', async (req, res) => {
  try {
    // Make a POST request to an external API
    const externalApiUrl = 'https://api.mathpix.com/v3/app-tokens';
    const headers = {
      'app_key': '73a1fa037d5c782c76d7a64d78a8421516fdd44fbfa8cbac02fc2a9dc6a682d0',
    };

    const response = await axios.post(externalApiUrl, null, { headers });

    // Process the response from the external API
    const apiData = response.data.app_token;
    res.json({ message: 'Data from external API', data: apiData });
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
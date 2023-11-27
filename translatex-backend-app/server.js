const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

// Enable CORS for all routes
app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

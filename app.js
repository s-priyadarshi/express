const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Define a route that makes an API request
app.get('/api/data', async (req, res) => {
  try {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Example API URL
    const response = await axios.get(apiUrl);

    // Send the API response back to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors
    res.status(error.response ? error.response.status : 500).json({ error: 'An error occurred' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

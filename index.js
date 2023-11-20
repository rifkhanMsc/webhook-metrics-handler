const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Parse JSON payloads from GitHub Webhooks
app.use(bodyParser.json());
app.get('/webhook', (req, res) => {
      
    res.status(200).send('OK');
  });
// Endpoint to handle GitHub Webhook events
app.post('/webhook', (req, res) => {
  const eventData = req.body;

  // Check if the event is relevant (e.g., push, pull_request)
//   console.log(`Received GitHub event: ${JSON.stringify(eventData)}`);
  if (eventData && eventData.repository && eventData.repository.full_name === 'rifkhanMsc/scikit-learn') {
    console.log(`Received GitHub event: ${eventData.action}`);

    // Trigger the metric update process here
    updateMetrics();
  }

  res.status(200).send('OK');
});

// Function to update metrics (replace with your actual metric update logic)
const updateMetrics = async () => {
  try {
    // Your metric update logic here
    console.log('Updating metrics...');
    const commits = await fetchCommits();
    console.log(`Updated metrics with ${JSON.stringify(commits)} commits.`);
  } catch (error) {
    console.error('Error updating metrics:', error.message);
  }
};

// Function to fetch commits from GitHub (replace with your actual GitHub API logic)
const fetchCommits = async () => {
  //const response = await axios.get('https://api.github.com/repos/rifkhanMsc/scikit-learn/commits');
  const response = await axios.get('https://api.github.com/repos/freeCodeCamp/freeCodeCamp/commits');
  return response.data;
};

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
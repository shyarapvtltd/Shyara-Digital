// Simple Express server for Render Web Service
// This handles SPA routing by serving index.html for all routes
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 10000;

// Serve static files from the frontend build (optional local/prod parity; Render Static Site uses frontend/dist directly)
const distPath = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(distPath));

// Handle SPA routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

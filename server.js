const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

// serve static frontend files (optional, later we’ll use nginx)
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Backend!' });
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});

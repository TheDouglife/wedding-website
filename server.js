import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 8080;
const VISITORS_FILE = path.join(__dirname, 'data', 'visitors.json');

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize visitors file if it doesn't exist
if (!fs.existsSync(VISITORS_FILE)) {
  fs.writeFileSync(VISITORS_FILE, JSON.stringify({ count: 0 }));
}

// Serve static files from dist (built React app)
app.use(express.static(path.join(__dirname, 'dist')));

// API endpoint to get and increment visitor count
app.get('/api/visitors', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(VISITORS_FILE, 'utf8'));
    data.count += 1;
    fs.writeFileSync(VISITORS_FILE, JSON.stringify(data));
    res.json({ count: data.count });
  } catch (error) {
    console.error('Error updating visitor count:', error);
    res.status(500).json({ error: 'Failed to update visitor count' });
  }
});

// Serve index.html for all other routes (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

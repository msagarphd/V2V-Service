const express = require('express');
//const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const express = require('express');
//const app = express();

app.use(cors());

// Enable CORS
//app.use(cors());
// Middleware
app.use(bodyParser.json());

// Dummy data for demonstration
const parcels = [
  { id: 1, parcelId: 'ABC123', status: 'Delivered' },
  { id: 2, parcelId: 'XYZ456', status: 'In transit' },
  // Add more dummy data as needed
];

// Routes
app.get('/api/getParcelStatus', (req, res) => {
  res.json(parcels);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

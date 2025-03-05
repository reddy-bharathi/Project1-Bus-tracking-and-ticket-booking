// bus-tracking-backend/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const busData = [
    { number: '314D', source: 'Majestic', destination: 'CV Raman Nagar', status: 'Scheduled at 09:15' },
    { number: '314D', source: 'Majestic', destination: 'CV Raman Nagar', status: 'Scheduled at 13:30' },
    // Add more bus data as needed
    { number: '314A', source: 'kadapa', destination: 'vempalli', status: 'Scheduled at 09:15' },
    { number: '314B', source: 'Madanapalle', destination: 'vempalli', status: 'Scheduled at 13:30' },
];

app.post('/search-buses', (req, res) => {
    const { source, destination, date } = req.body;
    const filteredBuses = busData.filter(bus =>
        bus.source === source && bus.destination === destination
    );
    res.json(filteredBuses);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

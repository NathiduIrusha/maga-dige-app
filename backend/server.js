const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// දුර මනින function එක (KM වලින්)
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// කොට්ටාව අවට සැබෑ ස්ථාන කිහිපයක්
const locations = [
    { id: 1, type: 'garage', name: 'Kottawa Service Station', lat: 6.8400, lng: 79.9650, desc: 'Full vehicle service', hours: '08:00 AM - 06:00 PM' },
    { id: 2, type: 'tyre-shop', name: 'Kottawa Tyre House', lat: 6.8415, lng: 79.9680, desc: 'Best for tyre repairs', hours: '08:00 AM - 08:00 PM' },
    { id: 3, type: 'shop', name: 'Super Center Kottawa', lat: 6.8430, lng: 79.9640, desc: 'All household items', hours: '09:00 AM - 10:00 PM' },
    { id: 4, type: 'garage', name: 'Auto Care Expert', lat: 6.8380, lng: 79.9820, desc: 'Engine tuning and repairs', hours: '07:30 AM - 05:30 PM' },
    { id: 5, type: 'shop', name: 'Saman Grocery', lat: 6.8490, lng: 79.9550, desc: 'Daily essentials', hours: '06:00 AM - 11:00 PM' }
];

// ළඟම තැන් හොයන API එක
app.get('/api/nearby', (req, res) => {
    const { lat, lng, radius } = req.query;
    const userLat = parseFloat(lat);
    const userLng = parseFloat(lng);
    const rad = parseFloat(radius) || 4; // 4km ඇතුළත

    const filtered = locations.map(loc => ({
        ...loc,
        distance: getDistance(userLat, userLng, loc.lat, loc.lng).toFixed(2)
    })).filter(loc => loc.distance <= rad);

    res.json(filtered);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
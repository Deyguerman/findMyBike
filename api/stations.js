// Data
const bikeStations = require('../data/bikeStations.json')

// Functions
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

function getDistanceBetweenPoints(lat1, lng1, lat2, lng2, unit) {
    // El radio del planeta tierra en metros.
    let R = 6378137;
    let dLat = degreesToRadians(lat2 - lat1);
    let dLong = degreesToRadians(lng2 - lng1);
    let a = Math.sin(dLat / 2)
        *
        Math.sin(dLat / 2)
        +
        Math.cos(degreesToRadians(lat1))
        *
        Math.cos(degreesToRadians(lat1))
        *
        Math.sin(dLong / 2)
        *
        Math.sin(dLong / 2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = R * c;

    switch (unit.toUpperCase()) {
        case 'K':
            return distance * 0.001
        default:
            return distance
    }
}

module.exports = async function handler(req, res) {
    const { latitude, longitude, distance, unit = 'm' } = req.query;

    const stations = bikeStations.filter(item => getDistanceBetweenPoints(latitude, longitude, item.latitude, item.longitude, unit) <= distance && item.status === 'IN_SERVICE')

    return res.status(200).json(stations);
}
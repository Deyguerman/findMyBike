const stations = require('../stations');
const { ServerResponse } = require('http')

const res = {
    status: () => ({
        json: (json) => json
    })
}

test('Get at least 1 station - unit = meter', () => {
    const req = {
        query: {
            latitude: 20.666378,
            longitude: -103.34882,
            distance: 5
        }
    }

    return stations(req, res).then(res => {
        expect(res).toHaveLength(1);
    })
});

test('No station, unit = meters', () => {
    const req = {
        query: {
            latitude: 21.666378,
            longitude: -103.34882,
            distance: 0
        }
    }

    return stations(req, res).then(res => {
        expect(res).toHaveLength(0);
    })
});
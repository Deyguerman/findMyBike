# Find my Bike API
This project was developed to export a service to find bike stations on Guadalajara, Mexico base on coordinates, distance and unit (M = 'Meters', K='Kilometers')

### Getting started
```
git clone --url
```
```
npm install
```

### Stations Endpoint

```
Query Params
@latitude = Long number
@longitude = Long number
@distance = number
@unit (optional) = M = 'Meters' || K='Kilometers' -> Use M by default
```

#### Demo
1 Station
```
curl --location --request GET 'https://findmybike-azszodk0m-deyguerman.vercel.app/stations?latitude=20.666378&longitude=-103.34882&distance=5'
```

4 Stations
```
curl --location --request GET 'https://findmybike-azszodk0m-deyguerman.vercel.app/stations?latitude=20.666378&longitude=-103.34882&distance=300'
```

No Stations
```
curl --location --request GET 'https://findmybike-azszodk0m-deyguerman.vercel.app/stations?latitude=21.666378&longitude=-103.34882&distance=300'
```

### Unit Test
#### Jest
To run test 
```
npm run test
```

This will return two tests for "/stations" endpoint, one will be return at least 1 station based on your coordinates and your desired distance, and on the second one 0 stations.

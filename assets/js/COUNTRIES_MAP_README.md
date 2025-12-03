# Countries Map Setup

## How to add visited countries to the map

1. Open the file `assets/js/countries-map.js`
2. Find the `visitedCountries` array
3. Add ISO 3166-1 alpha-3 country codes to the array

### Example:
```javascript
var visitedCountries = [
    'SWE',  // Sweden
    'USA',  // United States
    'GBR',  // United Kingdom
    'FRA',  // France
    'DEU',  // Germany
    'ESP',  // Spain
    'ITA',  // Italy
    'NOR',  // Norway
    'DNK',  // Denmark
    'FIN'   // Finland
];
```

### Common country codes:
- SWE - Sweden
- USA - United States
- GBR - United Kingdom
- FRA - France
- DEU - Germany
- ESP - Spain
- ITA - Italy
- NOR - Norway
- DNK - Denmark
- FIN - Finland
- NLD - Netherlands
- BEL - Belgium
- CHE - Switzerland
- AUT - Austria
- POL - Poland
- CZE - Czech Republic
- JPN - Japan
- CHN - China
- IND - India
- AUS - Australia
- CAN - Canada
- BRA - Brazil
- MEX - Mexico
- ARG - Argentina
- ZAF - South Africa

You can find the full list of ISO 3166-1 alpha-3 codes at: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3


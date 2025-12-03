// Countries visited map
// ISO 3166-1 alpha-3 country codes for visited countries
var visitedCountries = [
    'SWE',  // Sweden
    'NOR',  // Norway
    'FIN',  // Finland
    'DNK',  // Denmark
    'DEU',  // Germany
    'POL',  // Poland
    'NLD',  // Netherlands
    'BEL',  // Belgium
    'LUX',  // Luxembourg
    'FRA',  // France
    'GBR',  // United Kingdom
    'IRL',  // Ireland
    'CHE',  // Switzerland
    'AUT',  // Austria
    'LIE',  // Liechtenstein
    'ESP',  // Spain
    'ITA',  // Italy
    'MLT',  // Malta
    'SVN',  // Slovenia
    'HRV',  // Croatia
    'HUN',  // Hungary
    'SVK',  // Slovakia
    'CZE',  // Czech Republic
    'GRC',  // Greece
    'TUR',  // Turkey
    'CYP',  // Cyprus
    'CHN',  // China
    'JPN',  // Japan
    'USA',  // United States
    'CAN'   // Canada
];

// Initialize the map when the page loads
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('countries-map')) {
        initCountriesMap();
    }
});

function initCountriesMap() {
    // Create map
    var map = L.map('countries-map').setView([20, 0], 2);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
    
    var geoJsonLayer;
    
    // Load world countries GeoJSON
    fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
        .then(response => response.json())
        .then(data => {
            // Count total countries and visited countries
            var totalCountries = data.features.length;
            var visitedCount = 0;
            
            // Count visited countries
            data.features.forEach(function(feature) {
                if (visitedCountries.includes(feature.id)) {
                    visitedCount++;
                }
            });
            
            // Update progress bar
            var percentage = Math.round((visitedCount / totalCountries) * 100);
            var countElement = document.getElementById('countries-count');
            var percentageElement = document.getElementById('countries-percentage');
            var progressBar = document.getElementById('countries-progress-bar');
            var progressText = document.getElementById('countries-progress-text');
            
            if (countElement) {
                countElement.textContent = visitedCount + ' / ' + totalCountries + ' countries visited';
            }
            if (percentageElement) {
                percentageElement.textContent = percentage + '%';
            }
            if (progressBar) {
                progressBar.style.width = percentage + '%';
            }
            if (progressText) {
                progressText.textContent = percentage + '%';
            }
            
            // Style function for countries
            function getStyle(feature) {
                var countryCode = feature.id;
                var isVisited = visitedCountries.includes(countryCode);
                
                return {
                    fillColor: isVisited ? '#4caf50' : '#333',
                    weight: 1,
                    opacity: 1,
                    color: '#555',
                    dashArray: '',
                    fillOpacity: isVisited ? 0.7 : 0.3
                };
            }
            
            // Add countries to map
            geoJsonLayer = L.geoJSON(data, {
                style: getStyle,
                onEachFeature: function(feature, layer) {
                    var countryName = feature.properties.name || feature.properties.NAME || feature.properties.ADMIN;
                    var countryCode = feature.id;
                    var isVisited = visitedCountries.includes(countryCode);
                    
                    layer.bindPopup(
                        '<strong>' + countryName + '</strong><br>' +
                        (isVisited ? '<span style="color: #4caf50;">✓ Visited</span>' : 'Not visited')
                    );
                    
                    layer.on({
                        mouseover: function(e) {
                            var layer = e.target;
                            layer.setStyle({
                                weight: 3,
                                color: '#fff',
                                dashArray: '',
                                fillOpacity: 0.8
                            });
                            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                                layer.bringToFront();
                            }
                        },
                        mouseout: function(e) {
                            geoJsonLayer.resetStyle(e.target);
                        }
                    });
                }
            }).addTo(map);
        })
        .catch(error => {
            console.error('Error loading map data:', error);
            document.getElementById('countries-map').innerHTML = 
                '<p style="text-align: center; padding: 20px; color: var(--global-text-color);">Error loading map. Please check your internet connection.</p>';
        });
}


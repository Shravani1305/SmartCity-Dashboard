
let map;
let markers = [];

function initMap() {
    const cityCenter = { lat: -34.397, lng: 150.644 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: cityCenter
    });

    // Initial markers for demonstration
    addMarker({ lat: -34.397, lng: 150.644, title: 'City Center' });
    addMarker({ lat: -34.38, lng: 150.63, title: 'Park' });
    addMarker({ lat: -34.41, lng: 150.66, title: 'Museum' });
}

function addMarker(location) {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: location.title
    });
    markers.push(marker);
}

function filterMap(filterType) {
    clearMarkers();
    if (filterType === 'eco-friendly') {
        addMarker({ lat: -34.38, lng: 150.63, title: 'Eco-Friendly Park' });
        addMarker({ lat: -34.39, lng: 150.65, title: 'Solar Farm' });
    } else if (filterType === 'tourist-spots') {
        addMarker({ lat: -34.41, lng: 150.66, title: 'City Museum' });
        addMarker({ lat: -34.40, lng: 150.62, title: 'Historic Tower' });
    }
}

function resetMap() {
    clearMarkers();
    initMap();
}

function clearMarkers() {
    for (let marker of markers) {
        marker.setMap(null);
    }
    markers = [];
}

function rsvpEvent(eventName) {
    alert(`You have RSVP'd to ${eventName}`);
}

// Simulate real-time data updates
setInterval(() => {
    document.getElementById('traffic-data').textContent = `Traffic: ${Math.floor(Math.random() * 100)}% congested`;
    document.getElementById('weather-data').textContent = `Weather: ${['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)]}`;
    document.getElementById('air-quality-data').textContent = `Air Quality: ${Math.floor(Math.random() * 300)} AQI`;
}, 5000);

// Simulate emergency alerts
setInterval(() => {
    const alerts = ['Road closure on Main St.', 'Power outage in Downtown', 'Severe weather warning'];
    document.getElementById('emergency-alert').textContent = alerts[Math.floor(Math.random() * alerts.length)];
}, 10000);
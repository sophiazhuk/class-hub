document.addEventListener('DOMContentLoaded', function () {
    var map = document.getElementById('map');
    var sections = document.querySelectorAll('.map-section');

    sections.forEach(function (section) {
        section.addEventListener('click', function () {
            // Get the latitude and longitude ranges for the section
            var latMin = parseFloat(section.getAttribute('data-lat-min'));
            var latMax = parseFloat(section.getAttribute('data-lat-max'));
            var lngMin = parseFloat(section.getAttribute('data-lng-min'));
            var lngMax = parseFloat(section.getAttribute('data-lng-max'));

            // Check if the user's location is within the section's range
            checkUserLocation(latMin, latMax, lngMin, lngMax, section);
        });
    });

    function checkUserLocation(latMin, latMax, lngMin, lngMax, section) {
        // Use Geolocation API to get user's current position
        navigator.geolocation.getCurrentPosition(function (position) {
            var userLat = position.coords.latitude;
            var userLng = position.coords.longitude;

            // Check if the user's location is within the section's range
            if (userLat >= latMin && userLat <= latMax && userLng >= lngMin && userLng <= lngMax) {
                // Unblur the section if the user is within the range
                section.style.filter = 'blur(0)';
            }
        }, function (error) {
            console.error('Error getting user location:', error);
        });
    }
});

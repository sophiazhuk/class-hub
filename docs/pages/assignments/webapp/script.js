document.addEventListener('DOMContentLoaded', function () {
    var map = document.getElementById('map');
    var sections = document.querySelectorAll('.map-section');
    var updateLocationBtn = document.getElementById('updateLocationBtn');

    updateLocationBtn.addEventListener('click', function () {
        updateLocation(sections);
    });

    function updateLocation(sections) {
        // Use Geolocation API to get user's current position
        navigator.geolocation.getCurrentPosition(function (position) {
            var userLat = position.coords.latitude;
            var userLng = position.coords.longitude;

            // Check if the user's location is within any section's range
            sections.forEach(function (section) {
                var latMin = parseFloat(section.getAttribute('data-lat-min'));
                var latMax = parseFloat(section.getAttribute('data-lat-max'));
                var lngMin = parseFloat(section.getAttribute('data-lng-min'));
                var lngMax = parseFloat(section.getAttribute('data-lng-max'));

                // Check if the user's location is within the section's range
                if (userLat >= latMin && userLat <= latMax && userLng >= lngMin && userLng <= lngMax) {
                    // Unblur the section if the user is within the range
                    section.style.background = 'none'; // Remove the background blur
                }
            });

            console.log('Location updated:', userLat, userLng);
        }, function (error) {
            console.error('Error getting user location:', error);
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var map = document.getElementById('map');
    var sections = document.querySelectorAll('.map-section');
    var updateLocationBtn = document.getElementById('updateLocationBtn');
    var locationInfo = document.getElementById('locationInfo');

    updateLocationBtn.addEventListener('click', function () {
        updateLocation(sections, locationInfo);
    });

    function updateLocation(sections, locationInfo) {
        // Check if Geolocation is supported
        if ('geolocation' in navigator) {
            // Use Geolocation API to get user's current position
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    var userLat = position.coords.latitude;
                    var userLng = position.coords.longitude;

                    // Display latitude and longitude in the info box
                    locationInfo.innerText = 'Current Location: Latitude ' + userLat + ', Longitude ' + userLng;
                    locationInfo.style.display = 'block';

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
                },
                function (error) {
                    console.error('Error getting user location:', error.message);
                    // You can display an error message to the user if needed
                }
            );
        } else {
            console.error('Geolocation is not supported in this browser.');
            // You can display an error message to the user if needed
        }
    }
});

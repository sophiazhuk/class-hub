// Get all the number elements
const numbers = document.querySelectorAll('.number');

// Add click event listener to each number element
numbers.forEach((number, index) => {
    number.addEventListener('click', () => {
        // Get the window element
        const window = document.querySelector('.window');

        // Calculate the color value based on the index of the clicked number
        const colorValue = Math.floor((index / (numbers.length - 1)) * 255); // Reverse the order

        // Set the background color of the window element based on the calculated color value
        const minColor = [135, 206, 250]; // Light blue
        const maxColor = [0, 0, 139]; // Dark blue
        const r = minColor[0] + Math.floor((maxColor[0] - minColor[0]) * (colorValue / 255));
        const g = minColor[1] + Math.floor((maxColor[1] - minColor[1]) * (colorValue / 255));
        const b = minColor[2] + Math.floor((maxColor[2] - minColor[2]) * (colorValue / 255));

        // Add a smooth transition to the background color change
        window.style.transition = 'background-color 0.5s ease-in-out';

        // Set the background color of the window element based on the calculated color value
        window.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        // Show or hide the .window:after element based on the index of the clicked number
        const windowAfter = document.querySelector('.window:after');
        if () {
            windowAfter.style.display = 'block';
        } else {
            windowAfter.style.display = 'none';
        }
    });
});



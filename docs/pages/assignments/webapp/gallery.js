document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("image-gallery");

    // Simulated data (replace with actual data)
    const savedImages = [
        "path/to/combined_image1.png",
        "path/to/combined_image2.png",
        // Add more image paths as needed
    ];

    // Populate the gallery with saved images
    savedImages.forEach((imagePath) => {
        const imageCard = createImageCard(imagePath);
        galleryContainer.appendChild(imageCard);
    });

    function createImageCard(imagePath) {
        const card = document.createElement("div");
        card.classList.add("image-card");

        const image = document.createElement("img");
        image.src = imagePath;

        card.appendChild(image);
        return card;
    }
});

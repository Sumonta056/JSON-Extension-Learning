const ImageData = {
  Images: [
    "CouplePotrait/1 (1).jpeg",
    "CouplePotrait/1 (2).jpeg",
    "CouplePotrait/1 (3).jpeg",
    "CouplePotrait/1 (4).jpeg",
    "CouplePotrait/1 (5).jpeg",
    "CouplePotrait/1 (6).jpeg",
    "CouplePotrait/1 (7).jpeg",
    "CouplePotrait/1 (8).jpeg",
    "CouplePotrait/1 (9).jpeg",
    "CouplePotrait/1 (10).jpeg",
    "CouplePotrait/1 (11).jpeg",
    "CouplePotrait/1 (12).jpeg",
    "CouplePotrait/1 (13).jpeg",
    "CouplePotrait/1 (14).jpeg",
    "CouplePotrait/1 (15).jpeg",
    "CouplePotrait/1 (16).jpeg",
    "CouplePotrait/1 (17).jpeg",
    "CouplePotrait/1 (18).jpeg",
    "CouplePotrait/1 (19).jpeg",
    "CouplePotrait/1 (20).jpeg",
    "CouplePotrait/1 (21).jpeg",
    "CouplePotrait/1 (22).jpeg",
    "CouplePotrait/1 (23).jpeg",
    "CouplePotrait/1 (24).jpeg",
    "CouplePotrait/1 (25).jpeg",
    "CoupleLand/2 (1).jpeg",
    "CoupleLand/2 (2).jpeg",
    "CoupleLand/2 (3).jpeg",
    "CoupleLand/2 (4).jpeg",
    "CoupleLand/2 (5).jpeg",
    "CoupleLand/2 (6).jpeg",
    "CoupleLand/2 (7).jpeg",
    "CoupleLand/2 (8).jpeg",
    "CoupleLand/2 (9).jpeg",
    "CoupleLand/2 (10).jpeg",
    "CoupleLand/2 (11).jpeg",
    "CoupleLand/2 (12).jpeg",
    "CoupleLand/2 (13).jpeg",
    "CoupleLand/2 (14).jpeg",
    "CoupleLand/2 (15).jpeg",
    "Couplev2/1 (1).jpeg",
    "Couplev2/1 (2).jpeg",
    "Couplev2/1 (3).jpeg",
    "Couplev2/1 (4).jpeg",
    "Couplev2/1 (5).jpeg",
    "Couplev2/1 (6).jpeg",
    "Couplev2/1 (7).jpeg",

    "Couplev2/1 (25).jpg",
    "Couplev2/1 (26).jpg",
    "Couplev2/1 (27).jpg",
    "Couplev2/1 (28).jpg",
    "Couplev2/1 (29).jpg",
    "Couplev2/1 (30).jpg",
    "Couplev2/1 (31).jpg",
    "Couplev2/1 (32).jpg",
    "Couplev2/1 (33).jpg",
    "Couplev2/1 (34).jpg",
    "Couplev2/1 (35).jpg",
    "Couplev2/1 (36).jpg",
    "Couplev2/1 (37).jpg",
    "Couplev2/1 (38).jpg",
    "Couplev2/1 (39).jpg",

    "Couplev2/1 (8).jpeg",
    "Couplev2/1 (9).jpeg",
    "Couplev2/1 (10).jpeg",
    "Couplev2/1 (11).jpeg",
    "Couplev2/1 (12).jpeg",
    "Couplev2/1 (13).jpeg",
    "Couplev2/1 (14).jpeg",
    "Couplev2/1 (15).jpeg",
    "Couplev2/1 (16).jpeg",
    "Couplev2/1 (17).jpeg",
    "Couplev2/1 (18).jpeg",
    "Couplev2/1 (19).jpeg",
    "Couplev2/1 (20).jpeg",
    "Couplev2/1 (21).jpeg",
    "Couplev2/1 (22).jpeg",
    "Couplev2/1 (23).jpeg",
    "Couplev2/1 (24).jpeg",
  ],
};

// Get references to the elements
const imageElement = document.getElementById("usImage");

// Function to load a random image
function loadRandomImage() {
  const Images = ImageData.Images;
  const randomIndex = Math.floor(Math.random() * Images.length);
  const randomImage = Images[randomIndex];

  // Update the image source and alt text
  imageElement.src = randomImage;
  imageElement.alt = `Random Image ${randomIndex + 1}`;
}

// Initial image load
loadRandomImage();

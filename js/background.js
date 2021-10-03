const images = [
    'forest_1.jpeg',
    'forest_2.jpeg',
    'forest_3.jpeg',
    'forest_4.jpeg',
    'forest_5.jpeg',
    'forest_6.jpeg',
    'sea_1.jpeg',
    'sea_2.jpeg',
    'sea_3.jpeg',
    'sea_4.jpeg',
]

function randomRange(min, max) {
    return Math.floor(Math.random() * max) + min
}

const chosenImage = images[randomRange(0, images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
document.body.style.background = `url(img/${chosenImage}) no-repeat`;
document.body.style.backgroundSize = 'cover';

# manam
Imprpve your body fragrance 

Body Fragrance Manifestation PWA
Overview
The Body Fragrance Manifestation PWA (Progressive Web App) is a single-page application designed to provide a serene and inspiring visual experience for personal manifestation. It features a continuous slideshow of images from a local folder, overlaid with customizable manifestation dialogues that appear and fade out smoothly. The app is built as a PWA, allowing for installation on devices and offline access.

Features
Single-Page Application: All content and functionality reside on one seamless page.

Responsive Design: Adapts perfectly to various screen sizes (mobile, tablet, desktop) and orientations.

Image Slideshow: Displays a continuous loop of images from a designated local folder.

Mesmerizing Transitions: Smooth CSS-driven transitions with a subtle "slow zooming-in" (Ken Burns) effect on images.

Dynamic Manifestation Dialogues: Inspirational messages appear centrally over the slideshow, fading in and out at customizable intervals.

Progressive Web App (PWA): Installable on compatible devices, offering an app-like experience and offline capabilities.

Highly Customizable: Easily adjust slideshow timings, zoom levels, dialogue content, and PWA metadata via simple variables in the code.

Getting Started
To run this application locally, you will need a basic web server.

Prerequisites
A web browser (Chrome, Firefox, Edge, Safari, etc.)

A local web server (e.g., Apache, Nginx, Python's http.server, MAMP, XAMPP).

Installation
Clone or Download: Get the project files by cloning the repository or downloading the ZIP.

git clone <repository-url>
cd body-fragrance-manifestation-pwa

Place Images: Create a folder named mantras in the root directory of the project. Place all your desired manifestation images (e.g., .jpg, .png, .webp) inside this mantras folder.

project_root/
├── index.html
├── style.css
├── script.js
├── manifest.json
├── service-worker.js
└── mantras/
    ├── your_image_1.jpg
    ├── your_image_2.png
    └── ...

Important: You will need to manually list the filenames of your images in the imageFilenames array within script.js for the app to load them. For example:

const imageFilenames = [
    'your_image_1.jpg',
    'your_image_2.png',
    // Add all your image filenames here
];

Also, ensure these image paths are added to the urlsToCache array in service-worker.js if you want them available offline.

Running the App
Start Your Web Server: Point your local web server to the project_root directory.

Using Python (simple): Navigate to the project_root in your terminal and run:

python -m http.server 8000

Open in Browser: Open your web browser and navigate to http://localhost:8000 (or the port your server is using).

Customization
All key parameters for the slideshow and dialogues are easily configurable at the top of the script.js file.

script.js Customization
Open script.js and modify the following const variables:

slideshowImagesFolder: Path to your image folder (default: './mantras/').

imageDisplayDurationMs: How long each image is displayed before transitioning (in milliseconds).

imageTransitionDurationMs: Duration of the fade and zoom transition between images (in milliseconds).

zoomAmount: The intensity of the "slow zooming-in" effect (e.g., 1.0 for no zoom, 1.1 for 10% zoom).

dialogueFadeDurationMs: How long each manifestation dialogue message takes to fade in/out (in milliseconds).

dialogueDisplayDurationMs: How long each dialogue message is fully visible (in milliseconds).

dialogueDelayBetweenMs: The delay before the next dialogue message appears after the previous one fades out (in milliseconds).

manifestationDialogues: An array of strings containing all your desired manifestation messages.

// --- Customizable Parameters ---
const slideshowImagesFolder = './mantras/';
const imageDisplayDurationMs = 8000;
const imageTransitionDurationMs = 2000;
const zoomAmount = 1.1;
const dialogueFadeDurationMs = 1000;
const dialogueDisplayDurationMs = 4000;
const dialogueDelayBetweenMs = 1000;

const manifestationDialogues = [
    "You are wonderful.",
    "You are beautiful.",
    "You are in good structure.",
    // Add or remove your custom manifestation messages here
];

manifest.json Customization
Open manifest.json to configure PWA metadata:

name: Full name of your app.

short_name: Shorter name for home screen icon.

description: A brief description of your app.

theme_color: The primary color for the browser's UI (e.g., address bar).

background_color: The background color displayed before the app loads.

icons: Update the src paths and sizes if you use custom icons. Ensure you have 192x192 and 512x512 PNG icons at minimum.

Project Structure
index.html: The main and only HTML file for the application.

style.css: Contains all the CSS rules for styling, responsiveness, and animations.

script.js: Contains the JavaScript logic for the slideshow, dialogue management, and PWA registration.

manifest.json: Defines the PWA's metadata and behavior.

service-worker.js: Handles caching of assets for offline functionality.

mantras/: This directory holds all the image files for the slideshow.

icons/ (optional, but recommended for PWA): Contains various sizes of app icons.

Contributing
Feel free to fork this repository, make improvements, and submit pull requests.
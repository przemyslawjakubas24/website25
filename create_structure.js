const fs = require('fs');
const path = require('path');

const folders = [
    "dist/css",
    "dist/img",
    "dist/js",
    "src/img",
    "src/js",
    "src/sass/components",
    "src/sass/core",
    "src/sass/layout",
    "src/sass/pages"
];

const files = {
    "src/js": ["script.js"],
    "src/sass": ["main.scss"],
    "src/sass/components": ["_button.scss", "_form.scss", "_index.scss"],
    "src/sass/core": ["_base.scss", "_index.scss", "_variables.scss"],
    "src/sass/layout": ["_footer.scss", "_header.scss", "_index.scss"],
    "src/sass/pages": ["_about.scss", "_index.scss"]
};

// Tworzenie folderów
folders.forEach(folder => {
    fs.mkdirSync(folder, { recursive: true });
});

// Tworzenie plików
Object.entries(files).forEach(([folder, filenames]) => {
    filenames.forEach(filename => {
        const filepath = path.join(folder, filename);
        fs.writeFileSync(filepath, '');
    });
});

console.log("Struktura plików i folderów została utworzona.");

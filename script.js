// Require the 'fs' module for file system operations
const fs = require('fs');

// Define the file path of the text file containing the paragraph
const filePath = 'file.txt';

// Read the content of the text file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Output the content to the terminal
    console.log('File content:');
    console.log(data);
});

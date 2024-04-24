// index.js

// Require the custom module
const customModule = require('./modules');

// Get the current date and time using the function from the custom module
const dateTime = customModule.getCurrentDateTime();

// Print the current date and time
console.log('Current date and time:', dateTime);

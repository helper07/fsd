// main.js

// Require the custom module
const myModule = require('./modules');

// Use the exported function to get today's date and time
const dateTime = myModule.getDateTime();

// Print the result
console.log('Today\'s date and time:', dateTime);

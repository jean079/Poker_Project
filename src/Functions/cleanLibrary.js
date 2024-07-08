// The library adds its own console.log statements. To avoid this, we need to override the console.log function with an empty function.
function cleanLibrary(lib) {
    // Save the original console.log function
    const originalConsoleLog = console.log; 
    // Override console.log with an empty function
    console.log = function () { };
    // Import the library
    const pokerEvaluator = require(lib);
    // Restore the original console.log function
    console.log = originalConsoleLog;
    return pokerEvaluator;
}
exports.cleanLibrary = cleanLibrary;

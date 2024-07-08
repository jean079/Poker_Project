function cleanLibrary(lib) {
    // Save the original console.log function
    const originalConsoleLog = console.log; 
    // Override console.log with an empty function
    console.log = function () { };
    // Import the library
    const PokerEvaluator = require(lib);
    // Restore the original console.log function
    console.log = originalConsoleLog;
    return PokerEvaluator;
}
exports.cleanLibrary = cleanLibrary;

# Console.Star

Console.star is a helper function to call console.log with stars pre/post-appended to the log

Install:
```
npm install console.star --save-dev
```

Usage:
```javascript
console.star('Hello %s', 'World');

// Result:
// ***************
// ***************
// Hello World
// ***************
// ***************
```

Updating Defaults:
```javascript
console.starOptions = {
	'starString': '***************', // Update the stars 
	'lines': 2, // Update the number of lines the stars appear
	'logType': 'log' // Update the console logger type (log, warn, error, etc.)
};
```

const express = require('express');
const path = require('path');
const fs = require('fs');

// Create an Express app.
const app = express();
const port = 3001;

app.use(express.json());
const routersPath = path.join(__dirname, 'routes');

fs.readdirSync(routersPath).forEach(file => {
    if (file.endsWith(".js")) {
        // dynamically import the router module from the file
        const routerModule = require(path.join(routersPath, file));
        const router = routerModule.router;
        // Register the router with the app
        app.use(router);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const http = require("http");
const container = require("./container");

container.resolve(function() {
    const app = SetupExpress();

    function SetupExpress() {
        const app = express();
        const server = http.createServer(app);
        server.listen(3000, function() {
            console.log("Mendengarkan port 3000! (listen on port 3000)");
        });
    }

    //Setup Router
    const router = require("express-promise-router")();
    users.SetRouting(router);

    app.use(router);
});
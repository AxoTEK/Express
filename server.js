const Express = require("express");
const app = Express();

app.use(Express.static("public"));

app.get("/", function(request, response) {
    response.status(200).sendFile(__dirname + "/views/index.html");
});

app.use("*", function(request, response) {
    response.status(404).send("Not Found");
});

const listener = app.listen(1337, function() {
    console.log("The Express server has started on port 1337.");
});

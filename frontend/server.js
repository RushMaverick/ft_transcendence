const express = require("express");
const path = require("path");

const app = express(); //create express app

app.use("/static", express.static(path.resolve(__dirname, ".", "static")));

app.get("/*", (req, res) => {
	res.sendFile(path.resolve(__dirname, ".", "index.html"));
}); //any path at all will go to route and send index.html

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
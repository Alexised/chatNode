const express = require("express");
const bodyParser = require("body-parser");
const response = require("./network/response");
let app = express();

const router = require("./network/routes");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);
router(app);
// app.use('/', function(req, res) {
//   res.send('Hello');
// });


app.use("/app", express.static("public"));
app.listen(3000);
console.log("listening on port 3000");

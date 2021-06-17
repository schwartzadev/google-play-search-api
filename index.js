const express = require("express");
const bodyParser = require("body-parser");
const gplay = require("google-play-scraper");
const morgan = require("morgan");
const port = 2222;

const app = express();
app.use(bodyParser.json())
app.use(morgan("combined"));
app.listen(port, () => {
  console.log(`Running on port ${port}.`);
  app.post("/search", function (req, res) {
    if (req.body.searchQuery === undefined) {
        res.status(400).send()
    } else {
        gplay
        .search({
            'term': req.body.searchQuery,
            'num': 1
        }).then(result => res.send(result));
    }
  });
});

const express = require("express");
const bodyParser = require("body-parser");
const gplay = require("google-play-scraper");
const port = 5555;

const app = express();
app.use(bodyParser.json())
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

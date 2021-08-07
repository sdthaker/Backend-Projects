const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const data = require("./data/data.json");

const app = express();
const PORT = 3000;

// This is for the public folder on path localhost:3000/tent.jpg
app.use(express.static("public"));

// This is the method to use JSON
// app.use(express.json());

// This is the method to use URLEncoded
app.use(express.urlencoded({ extended: true }));

// This is for proxies
app.set("trust proxy", "loopback");

// This is for the images folder on path localhost:3000/images/rocket.jpg
app.use("/images", express.static("images"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/newItem", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get(
  "/item/:id",
  (req, res, next) => {
    // this is the middleware that pulls the data
    const user = Number(req.params.id);
    // middleware that uses the req object
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    // everything above is middleware
    res.send(data.find((elem) => elem.id === user));
    next();
  },
  (req, res) => {
    console.log("Did you get the right data?");
  }
);

app
  .route("/item")
  .get((req, res) => {
    // res.download("images/rocket.jpg");
    // res.redirect("http://www.instagram.com");
    // res.send("a get request with /item route");
    // res.end();
    throw new Error();
  })
  .delete((req, res) => {
    res.send("a delete request with /item route");
  })
  .put((req, res) => {
    res.send("a put request with /item route");
  });

// Error handling function
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Red alert! Red alert!: ${err.stack}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});

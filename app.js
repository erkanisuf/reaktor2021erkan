const express = require("express");
const path = require("path");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// REDIS SETUP CONFIG TO AZURE
const axios = require("axios");
const redis = require("redis");
const bluebird = require("bluebird");

var client = redis.createClient(6380, process.env.REDISCACHEHOSTNAME, {
  auth_pass: process.env.REDISCACHEKEY,
  tls: { servername: process.env.REDISCACHEHOSTNAME },
});
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
////////////////
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

// GET Avaiblity info // FIRST CHECK IF THERE IS CACHE IN REDIS IF NOT THEN IT SENDS API CALL
app.post("/manufacture/", (req, res) => {
  const id = req.body.elementID.toUpperCase();
  const manufacture = req.body.manufacture;
  const searchTerm = manufacture;
  try {
    client.get(searchTerm, async (err, data) => {
      if (err) throw err;

      if (data) {
        const makeTakable = JSON.parse(data);
        const findBYId = makeTakable.find((el) => el.id === id);
        res.status(200).send({
          data: findBYId,
          message: "data retrieved from the cache",
        });
      } else {
        const data = await axios.get(
          `https://bad-api-assignment.reaktor.com/v2/availability/${searchTerm}/`
        );

        if (data.data.response != "[]") {
          client.setex(
            searchTerm,
            60 * 60 * 240, //THIS IS HOW LONG  SHOULD BE CACHED
            JSON.stringify(data.data.response)
          );
          const findBYId = data.data.response.find((el) => el.id === id);
          res.status(200).send({
            data: findBYId,
            message: "cache miss",
          });
        } else {
          res.status(400).send({
            message: "error",
          });
        }
      }
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// GET Categories products
app.get("/products/:id", (req, res, next) => {
  const searchTerm = req.params.id;
  console.log(req.params.id);
  try {
    client.get(searchTerm, async (err, data) => {
      if (err) throw err;

      if (data) {
        res.status(200).send({
          data: JSON.parse(data),
          message: "data retrieved from the cache",
        });
        uniqueArray(JSON.parse(data));
      } else {
        const data = await axios.get(
          `https://bad-api-assignment.reaktor.com/v2/products/${req.params.id}/`
        );

        if (data.data.response != "[]") {
          client.setex(searchTerm, 60 * 60 * 240, JSON.stringify(data.data));
          res.status(200).send({
            data: data.data,
            message: "cache miss",
          });
          uniqueArray(data.data);
        } else {
          res.status(400).send({
            message: "error",
          });
        }
      }
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// This Prefetches manifactures once produtct are fetched and makes cache
const uniqueArray = (gloves, resp) => {
  const seen = new Set();
  const filteredArr = gloves.filter((el) => {
    const duplicate = seen.has(el.manufacturer);
    seen.add(el.manufacturer);
    return !duplicate;
  }); // function to remove dublicate manufacture values

  let requests = filteredArr.map((url) => {
    return axios.get(
      `https://bad-api-assignment.reaktor.com/v2/availability/${url.manufacturer}/`
    );
  });
  //HERE FETCHES MULTIPLE LINKS
  Promise.all(requests)
    .then((responces) => {
      responces.map((el) => {
        const text = el.config.url;
        const slice = text.slice(0, -1);
        const saveSearchTerm = slice.substring(slice.lastIndexOf("/") + 1);
        console.log(saveSearchTerm);
        ////

        client.get(saveSearchTerm, async (err, data) => {
          if (err) throw err;

          if (data) {
            console.log("IT IS IN");
          } else {
            if (el.data.response != "[]") {
              client.setex(
                saveSearchTerm,
                60 * 60 * 240,
                JSON.stringify(el.data.response)
              );
              console.log("added DATA");
            }
          }
        });

        ////
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
app.use(express.static(path.join(__dirname, "build")));
// REACT TO STATIC
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

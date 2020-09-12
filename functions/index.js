const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQdCBAviUVhKcbYhNp1M3C3xvcgC0WbJrUzWMsh8G3Gz0FCCeD9rlK7Wo9QA8GlPyMWLtRT4koILhFkgUpdcaOM00eQKpvAgz"
);

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request received for amount - ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listener
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-af859/us-central1/api

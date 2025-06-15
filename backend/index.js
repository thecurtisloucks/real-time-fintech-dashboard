const express = require("express");
const WebSocket = require("ws");
const cors = require("cors");

const PORT = 4000;

const app = express();
app.use(cors());

const server = app.listen(PORT, () => {
  console.log(`HTTP server listening on ${PORT}`);
});

// WebSocket server on same HTTP server
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("New WebSocket connection");

  // Send mock live data every 2 seconds
  const interval = setInterval(() => {
    const fakePrice = (Math.random() * 1000).toFixed(2);
    ws.send(JSON.stringify({ symbol: "FAKE", price: fakePrice }));
  }, 2000);

  ws.on("close", () => clearInterval(interval));
});

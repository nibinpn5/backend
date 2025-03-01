const express = require("express");
const Auction = require("../models/Auction");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { title, description, startingBid } = req.body;
    const auction = new Auction({ title, description, startingBid });
    await auction.save();
    res.status(201).json(auction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/list", async (req, res) => {
  try {
    const auctions = await Auction.find();
    res.json(auctions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
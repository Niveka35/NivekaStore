const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.post("/", async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const { category, brand } = req.query;

    let query = {};

    if (category) {
      query.category = new RegExp(`^${category}$`, "i");
    }

    if (brand) {
      query.brand = new RegExp(`^${brand}$`, "i");
    }

    const items = await Item.find(query);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
